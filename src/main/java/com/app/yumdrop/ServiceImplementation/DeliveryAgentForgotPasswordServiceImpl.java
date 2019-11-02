package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Delivery_Agent;
import com.app.yumdrop.Entity.Delivery_Agent_Temporary_Password;
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
    private DeliveryAgentRepository daRepository;
    @Autowired
    private DeliveryAgentTemporaryPasswordRepository daTemporaryPasswordRepository;

    @Override
    public ResponseEntity<?> sendMailWithTemporaryPassword(String daEmail) {

        Delivery_Agent daExistsInDb = daRepository.findBydaEmail(daEmail);
        if (daExistsInDb != null) {
            String temporaryPassword = generateRandomPassword();
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setTo(daEmail);
            simpleMailMessage.setSubject("Temporary Password from Yumdrop");
            simpleMailMessage.setText("Hello delivery agent! Your temporary password is: " + temporaryPassword +
                    ". Please use this temporary password to set a new password and login into your account.");

            javaMailSender.send(simpleMailMessage);

            Delivery_Agent_Temporary_Password daTemporaryPassword = new Delivery_Agent_Temporary_Password(daEmail, PasswordUtils.convertPasswordToHash(temporaryPassword));
            Delivery_Agent_Temporary_Password newPasswordDA = daTemporaryPasswordRepository.save(daTemporaryPassword);
            if (newPasswordDA != null)
                return ResponseEntity.status(HttpStatus.OK).build();

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @Override
    public ResponseEntity<?> verifyTemporaryPasswordAndSetNewPassword(String daEmail, String temporaryPassword, String newPassword) {
        Delivery_Agent_Temporary_Password da = daTemporaryPasswordRepository.findBydaEmail(daEmail);
        boolean isTempPasswordMatching = PasswordUtils.checkIfPasswordMatches(temporaryPassword, da.getTemporaryPassword());
        if (isTempPasswordMatching) {
            Delivery_Agent daInDb = daRepository.findBydaEmail(daEmail);
            daInDb.setDAPassword(PasswordUtils.convertPasswordToHash(newPassword));
            //usersRepository.save(userInDb);
            daRepository.save(daInDb);
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
