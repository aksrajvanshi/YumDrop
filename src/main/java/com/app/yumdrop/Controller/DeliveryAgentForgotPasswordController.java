package com.app.yumdrop.Controller;

import com.app.yumdrop.FormEntity.DeliveryAgentForgotPasswordForm;
import com.app.yumdrop.Service.DeliveryAgentForgotPasswordService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@ComponentScan
@Controller
public class DeliveryAgentForgotPasswordController {

    @Autowired
    private DeliveryAgentForgotPasswordService deliveryAgentForgotPasswordService;

    @RequestMapping(value = "/forgotDeliveryAgentPassword", method = RequestMethod.POST)
    public ResponseEntity<?> sendForgotPasswordEmailToDeliveryAgent(@RequestBody DeliveryAgentForgotPasswordForm deliveryAgentForgotPasswordForm) {

        return deliveryAgentForgotPasswordService.sendMailWithTemporaryPassword(deliveryAgentForgotPasswordForm.getDeliveryAgentEmail());
    }

    @RequestMapping(value = "/setNewDeliveryAgentPassword", method = RequestMethod.POST)
    public ResponseEntity<?> verifyTemporaryPasswordAndSetNewDeliveryAgentPassword(@RequestBody DeliveryAgentForgotPasswordForm deliveryAgentForgotPasswordForm) {

        return deliveryAgentForgotPasswordService.verifyTemporaryPasswordAndSetNewPasswordDeliveryAgent(deliveryAgentForgotPasswordForm.getDeliveryAgentEmail(),
                deliveryAgentForgotPasswordForm.getDeliveryAgentTemporaryPassword(), deliveryAgentForgotPasswordForm.getNewPassword());
    }

}
