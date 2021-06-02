package com.app.yumdrop.ServiceImplementation;

import java.util.Date;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.FormEntity.UserRegisterForm;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Service.UserRegistrationService;
import com.app.yumdrop.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserRegistrationServiceImpl implements UserRegistrationService {

    final String EMAIL_ACCOUNT = "EMAIL_ACCOUNT";
    @Autowired
    private UsersRepository userRepository;

    @Override
    public ResponseEntity<?> registerUser(UserRegisterForm userDataForm) {
        boolean userExistsBool = userRepository.existsById(userDataForm.getUser_email());

        if (userExistsBool) {
            ErrorMessage userAlreadyExists = new ErrorMessage(new Date(),
                    "User already exists! Please login in the system using your credentials.", "");
            return new ResponseEntity<>(userAlreadyExists, HttpStatus.BAD_REQUEST);
        }

        Users userToRegister = new Users(userDataForm.getUser_email(), userDataForm.getUser_name(), EMAIL_ACCOUNT,
                PasswordUtils.convertPasswordToHash(userDataForm.getUser_password()), "SYSTEM", "SYSTEM");

        userRepository.save(userToRegister);
        SuccessMessage userRegisteredSuccessfully = new SuccessMessage(new Date(), "User is registered successfully");
        return new ResponseEntity<>(userRegisteredSuccessfully, HttpStatus.OK);
    }
}
