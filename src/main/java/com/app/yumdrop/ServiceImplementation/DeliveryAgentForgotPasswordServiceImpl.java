package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Delivery_Agent;
import com.app.yumdrop.Entity.DeliveryAgentTemporaryPassword;
import com.app.yumdrop.Repository.DeliveryAgentRepository;
import com.app.yumdrop.Repository.DeliveryAgentTemporaryPasswordRepository;
import com.app.yumdrop.Service.DeliveryAgentForgotPasswordService;
import com.app.yumdrop.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class DeliveryAgentForgotPasswordServiceImpl implements DeliveryAgentForgotPasswordService {

    @Autowired
    public JavaMailSender javaMailSender;
    @Autowired
    private DeliveryAgentRepository deliveryAgentRepository;
    @Autowired
    private DeliveryAgentTemporaryPasswordRepository deliveryAgentTemporaryPasswordRepository;

    @Override
    public ResponseEntity<?> sendMailWithTemporaryPassword(String deliveryAgentEmail) {

        Delivery_Agent deliveryAgentExistsInDb = deliveryAgentRepository.findByDeliveryAgentEmail(deliveryAgentEmail);
        if (deliveryAgentExistsInDb != null) {
            String temporaryPassword = generateRandomPassword();
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setTo(deliveryAgentEmail);
            simpleMailMessage.setSubject("Temporary Password from Yumdrop");
            simpleMailMessage.setText("Hello delivery agent! Your temporary password is: " + temporaryPassword +
                    ". Please use this temporary password to set a new password and login into your account.");

            javaMailSender.send(simpleMailMessage);

            DeliveryAgentTemporaryPassword deliveryAgentTemporaryPassword = new DeliveryAgentTemporaryPassword(deliveryAgentEmail, PasswordUtils.convertPasswordToHash(temporaryPassword));
            DeliveryAgentTemporaryPassword newPasswordDeliveryAgent = deliveryAgentTemporaryPasswordRepository.save(deliveryAgentTemporaryPassword);
            if (newPasswordDeliveryAgent != null)
                return ResponseEntity.status(HttpStatus.OK).build();

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @Override
    public ResponseEntity<?> verifyTemporaryPasswordAndSetNewPasswordDeliveryAgent(String deliveryAgentEmail, String deliveryAgentTemporaryPassword, String newPassword) {
        DeliveryAgentTemporaryPassword deliveryAgent = deliveryAgentTemporaryPasswordRepository.findByDeliveryAgentEmail(deliveryAgentEmail);
        boolean isTempPasswordMatching = PasswordUtils.checkIfPasswordMatches(deliveryAgentTemporaryPassword, deliveryAgent.getDeliveryAgentTemporaryPassword());
        if (isTempPasswordMatching) {
            Delivery_Agent deliveryAgentInDb = deliveryAgentRepository.findByDeliveryAgentEmail(deliveryAgentEmail);
            deliveryAgentInDb.setDeliveryAgentPassword(PasswordUtils.convertPasswordToHash(newPassword));
            deliveryAgentRepository.save(deliveryAgentInDb);
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    private String generateRandomPassword() {
        String SALTCHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 18) { // length of the random string.
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr;
    }
}
