package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Users;
//import com.app.yumdrop.Entity.UsersNewPassword;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Service.UpdatePasswordService;
import com.app.yumdrop.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class UpdatePasswordServiceImpl implements UpdatePasswordService {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public ResponseEntity<?> matchAndSetNewPassword(String userEmail, String password, String confirmPassword) {

            Users userInDb = usersRepository.findByuserEmail(userEmail);
            userInDb.setUserPassword(PasswordUtils.convertPasswordToHash(password));
            usersRepository.save(userInDb);
            return ResponseEntity.status(HttpStatus.OK).build();

        //return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
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

