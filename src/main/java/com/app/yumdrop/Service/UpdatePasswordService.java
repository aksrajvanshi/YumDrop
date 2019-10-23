package com.app.yumdrop.Service;

import org.springframework.http.ResponseEntity;

public interface UpdatePasswordService {

    ResponseEntity<?> matchAndSetNewPassword(String userEmail, String password, String confirmPassword);
}
