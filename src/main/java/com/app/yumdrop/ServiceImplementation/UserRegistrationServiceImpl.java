package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.FormEntity.UserRegisterForm;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Service.UserRegistrationService;
import com.app.yumdrop.Utils.PasswordUtils;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.Date;

@Service
public class UserRegistrationServiceImpl implements UserRegistrationService {

    @Autowired
    private UsersRepository userRepository;

    @Override
    public ResponseEntity<?> registerUser(UserRegisterForm userDataForm) {
        boolean userExistsBool = userRepository.existsById(userDataForm.getUser_email());

        if (userExistsBool) {
            ErrorMessage userAlreadyExists = new ErrorMessage(new Date(), "User already exists! Please login in the system using your credentials.",
                    "");
            return new ResponseEntity<>(userAlreadyExists, HttpStatus.BAD_REQUEST);
        }

        Users userToRegister = new Users(userDataForm.getUser_email(), userDataForm.getUser_name(),
                PasswordUtils.convertPasswordToHash(userDataForm.getUser_password()), "SYSTEM", "SYSTEM");

        Users registeredUser = userRepository.save(userToRegister);
        SuccessMessage userRegisteredSuccessfully = new SuccessMessage(new Date(), "User is registered successfully");
        return new ResponseEntity<>(userRegisteredSuccessfully, HttpStatus.OK);
    }
}
