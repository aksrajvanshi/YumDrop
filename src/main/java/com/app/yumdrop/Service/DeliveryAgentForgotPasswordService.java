package com.app.yumdrop.Service;

import org.springframework.http.ResponseEntity;

public interface DeliveryAgentForgotPasswordService {

    ResponseEntity<?> sendMailWithTemporaryPassword(String daEmail);

    ResponseEntity<?> verifyTemporaryPasswordAndSetNewPassword(String daEmail, String temporaryPassword, String newPassword);

}
