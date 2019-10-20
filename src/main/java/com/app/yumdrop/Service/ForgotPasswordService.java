package com.app.yumdrop.Service;

import com.app.yumdrop.Entity.Users;
import org.springframework.http.ResponseEntity;

public interface ForgotPasswordService {

        ResponseEntity<?> sendMailWithTemporaryPassword(String userEmail);

        ResponseEntity<?> verifyTemporaryPasswordAndSetNewPassword(String userEmail, String temporaryPassword, String newPassword);
}
