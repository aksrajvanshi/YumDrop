package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Service.ForgotPasswordService;
import com.app.yumdrop.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.nio.charset.Charset;
import java.util.Random;

@Service
public class ForgotPasswordServiceImpl implements ForgotPasswordService {

    @Autowired
    private UsersRepository usersRepository;

    private JavaMailSender javaMailSender;

    @Override
    public ResponseEntity<?> sendMailWithTemporaryPassword(String userEmail) {

        Users userExistsInDb = usersRepository.findByuserEmail(userEmail);
        if(userExistsInDb!=null) {

            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setTo(userEmail);
            simpleMailMessage.setSubject("Temporary Password from Yumdrop");
            String temporaryPassword = generateRandomPassword();
            simpleMailMessage.setText("Hello user! Your temporary password is: " + temporaryPassword);
            simpleMailMessage.setText(" Please use this temporary password to set a new password and login into your account.");
            javaMailSender.send(simpleMailMessage);

            userExistsInDb.setUserPassword(PasswordUtils.convertPasswordToHash(temporaryPassword));
            Users newPasswordUser = usersRepository.save(userExistsInDb);
            if(newPasswordUser!=null)
                return ResponseEntity.status(HttpStatus.OK).build();

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @Override
    public ResponseEntity<?> verifyTemporaryPasswordAndSetNewPassword(String userEmail, String temporaryPassword, String newPassword) {
        Users user = usersRepository.findByuserEmail(userEmail);
        boolean isTempPasswordMatching = PasswordUtils.checkIfPasswordMatches(temporaryPassword, user.getUserPassword());
        if(isTempPasswordMatching){
            user.setUserPassword(PasswordUtils.convertPasswordToHash(newPassword));
            Users newPasswordUser = usersRepository.save(user);
            if(newPasswordUser!=null)
                return ResponseEntity.status(HttpStatus.OK).build();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    private String generateRandomPassword(){
        byte[] array = new byte[7]; // length is bounded by 7
        new Random().nextBytes(array);
        String generatedRandomPassword = new String(array, Charset.forName("UTF-8"));
        return generatedRandomPassword;
    }
}
