package com.app.yumdrop.Service;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.FormEntity.UserRegisterForm;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;


public interface UserRegistrationService {

    ResponseEntity<?> registerUser(@RequestBody UserRegisterForm userDataForm);
}
