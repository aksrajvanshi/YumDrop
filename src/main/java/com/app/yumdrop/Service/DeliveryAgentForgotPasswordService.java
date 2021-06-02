package com.app.yumdrop.Service;

import org.springframework.http.ResponseEntity;

public interface DeliveryAgentForgotPasswordService {

    ResponseEntity<?> sendMailWithTemporaryPassword(String deliveryAgentEmail);

    ResponseEntity<?> verifyTemporaryPasswordAndSetNewPassword(String deliveryAgentEmail, String temporaryPassword,
            String newPassword);

}
