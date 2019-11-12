package com.app.yumdrop.Service;

import org.springframework.http.ResponseEntity;

public interface DeliveryAgentForgotPasswordService {

    ResponseEntity<?> sendMailWithTemporaryPassword(String deliveryAgentEmail);

    ResponseEntity<?> verifyTemporaryPasswordAndSetNewPasswordDeliveryAgent(String deliveryAgentEmail, String deliveryAgentTemporaryPassword, String newPassword);

}