package com.app.yumdrop.Service;

import org.springframework.http.ResponseEntity;

public interface ForgotPasswordService {

    ResponseEntity<?> sendMailWithTemporaryPassword(String userEmail);

    ResponseEntity<?> verifyTemporaryPasswordAndSetNewPassword(String userEmail, String temporaryPassword, String newPassword);
}
