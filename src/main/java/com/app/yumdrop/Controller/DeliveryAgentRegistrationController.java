package com.app.yumdrop.Controller;

import com.app.yumdrop.Repository.UsersOtpRepository;
import com.app.yumdrop.Repository.UsersRepository;

import com.app.yumdrop.Entity.DeliveryAgentOtp;
import com.app.yumdrop.FormEntity.DeliveryAgentRegisterForm;
import com.app.yumdrop.FormEntity.DeliveryAgentDetails;
import com.app.yumdrop.Repository.DeliveryAgentOtpRepository;
import com.app.yumdrop.Repository.DeliveryAgentRepository;

import com.app.yumdrop.Service.SmsTwoFactorService;
import com.app.yumdrop.Service.UserRegistrationService;
import com.app.yumdrop.Service.DeliveryAgentRegistrationService;
import com.app.yumdrop.Utils.OtpUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Random;

@ComponentScan
@Controller
public class DeliveryAgentRegistrationController {

    @Autowired
    UserRegistrationService userRegistrationService;

    @Autowired
    DeliveryAgentRegistrationService deliveryAgentRegistrationService;

    @Autowired
    SmsTwoFactorService smsTwoFactorService;


    @Autowired
    private DeliveryAgentRepository deliveryAgentRepository;

    @Autowired
    private DeliveryAgentOtpRepository deliveryAgentOtpRepository;




    @RequestMapping(value = "/deliveryAgentRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> deliveryAgentRegistration(@RequestBody DeliveryAgentDetails deliveryAgentDetails) {

        Random rnd = new Random();
        int otpNumber = rnd.nextInt(999999);
        boolean isSmsSent = smsTwoFactorService.send2FaCodeAsEmailDeliveryAgent(deliveryAgentDetails.getDeliveryAgent_email(), String.format("%06d", otpNumber));

        if(isSmsSent)
            return ResponseEntity.status(HttpStatus.OK).build();
        else
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }



    @RequestMapping(value = "/verifyOTPandRegisterDeliveryAgent", method = RequestMethod.POST)
    public ResponseEntity<?> verifyOTPandRegisterDeliveryAgent(@RequestBody DeliveryAgentRegisterForm deliveryAgentRegistrationForm) {

        DeliveryAgentOtp deliveryAgentOtp = deliveryAgentOtpRepository.findByDeliveryAgentEmail(deliveryAgentRegistrationForm.getDeliveryAgent_email());
        boolean checkOtpMatch = OtpUtils.checkIfDAOtpMatches(deliveryAgentRegistrationForm.getDeliveryAgent_otp(), deliveryAgentOtp.deliveryAgentOtp);

        if (checkOtpMatch) {
            deliveryAgentOtpRepository.deleteById(deliveryAgentRegistrationForm.getDeliveryAgent_email());
            return deliveryAgentRegistrationService.registerDeliveryAgent(deliveryAgentRegistrationForm);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

}
