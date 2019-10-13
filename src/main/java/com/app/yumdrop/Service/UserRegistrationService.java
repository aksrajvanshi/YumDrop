package com.app.yumdrop.Service;

import com.app.yumdrop.FormEntity.UsersDetails;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;


public interface UserRegistrationService {

    ResponseEntity<?> registerUser(@RequestBody UsersDetails userDataForm);
}
