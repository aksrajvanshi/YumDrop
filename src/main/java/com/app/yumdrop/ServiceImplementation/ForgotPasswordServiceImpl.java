package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.Entity.UsersTemporaryPassword;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Repository.UsersTemporaryPasswordRepository;
import com.app.yumdrop.Service.ForgotPasswordService;
import com.app.yumdrop.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Random;

@Service
public class ForgotPasswordServiceImpl implements ForgotPasswordService {

    @Autowired
    public JavaMailSender javaMailSender;
    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private UsersTemporaryPasswordRepository usersTemporaryPasswordRepository;

    @Override
    public ResponseEntity<?> sendMailWithTemporaryPassword(String userEmail) {

        Users userExistsInDb = usersRepository.findByuserEmail(userEmail);
        if (userExistsInDb != null) {
            String temporaryPassword = generateRandomPassword();
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setTo(userEmail);
            simpleMailMessage.setSubject("Temporary Password from Yumdrop");
            simpleMailMessage.setText("Hello user! Your temporary password is: " + temporaryPassword +
                    ". Please use this temporary password to set a new password and login into your account.");

            javaMailSender.send(simpleMailMessage);

            UsersTemporaryPassword usersTemporaryPassword = new UsersTemporaryPassword(userEmail, PasswordUtils.convertPasswordToHash(temporaryPassword));
            UsersTemporaryPassword newPasswordUser = usersTemporaryPasswordRepository.save(usersTemporaryPassword);
            if (newPasswordUser != null) {
                SuccessMessage temporaryPasswordSucessfullySent = new SuccessMessage(new Date(), "Temporary password sent to the user");
                return new ResponseEntity<>(temporaryPasswordSucessfullySent, HttpStatus.OK);
            }

            ErrorMessage mailNotSent = new ErrorMessage(new Date(), "Internal System error.",
                    "");
            return new ResponseEntity<>(mailNotSent, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @Override
    public ResponseEntity<?> verifyTemporaryPasswordAndSetNewPassword(String userEmail, String temporaryPassword, String newPassword) {
        UsersTemporaryPassword user = usersTemporaryPasswordRepository.findByuserEmail(userEmail);
        boolean isTempPasswordMatching = PasswordUtils.checkIfPasswordMatches(temporaryPassword, user.getTemporaryPassword());
        if (isTempPasswordMatching) {
            Users userInDb = usersRepository.findByuserEmail(userEmail);
            userInDb.setUserPassword(newPassword);
            usersTemporaryPasswordRepository.deleteById(userEmail);
            usersRepository.save(userInDb);
            SuccessMessage newPasswordSet = new SuccessMessage(new Date(), "Successfully set the new password");
            return new ResponseEntity<>(newPasswordSet, HttpStatus.OK);
        }

        ErrorMessage problemWithVerifyTemporaryPasswordAndSetNewPassword = new ErrorMessage(new Date(), "Internal System error.",
                "");
        return new ResponseEntity<>(problemWithVerifyTemporaryPasswordAndSetNewPassword, HttpStatus.INTERNAL_SERVER_ERROR);
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
