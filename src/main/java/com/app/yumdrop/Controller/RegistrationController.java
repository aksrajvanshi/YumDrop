package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.UsersOtp;
import com.app.yumdrop.FormEntity.RestaurantDetails;
import com.app.yumdrop.FormEntity.UserRegisterForm;
import com.app.yumdrop.FormEntity.UsersDetails;
import com.app.yumdrop.Repository.UsersOtpRepository;
import com.app.yumdrop.Repository.UsersRepository;

import com.app.yumdrop.Entity.Delivery_Agent_Otp;
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
public class RegistrationController {

    @Autowired
    UserRegistrationService userRegistrationService;

    @Autowired
    DeliveryAgentRegistrationService deliveryAgentRegistrationService;

    @Autowired
    SmsTwoFactorService smsTwoFactorService;

    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private UsersOtpRepository usersOtpRepository;

    @Autowired
    private DeliveryAgentRepository deliveryAgentRepository;

    @Autowired
    private DeliveryAgentOtpRepository deliveryAgentOtpRepository;


    @RequestMapping(value = "/userRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> userRegistration(@RequestBody UsersDetails usersDetails) {

        System.out.println("Received request from server!");
        Random rnd = new Random();
        int otpNumber = rnd.nextInt(999999);
        System.out.println("Sending OTP to user " + otpNumber);
        boolean isSmsSent = smsTwoFactorService.send2FaCodeAsEmail(usersDetails.getUser_email(), String.format("%06d", otpNumber));
        if(isSmsSent)
            return ResponseEntity.status(HttpStatus.OK).build();
        else
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @RequestMapping(value = "/facebookUserRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> facebookUserRegistration(@RequestBody String faceBook){
        System.out.println(faceBook);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @RequestMapping(value = "/restaurantRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> restaurantRegistration(@RequestBody RestaurantDetails restaurantDetails) {

        System.out.println("Received request from server!");
        Random rnd = new Random();
        int otpNumber = rnd.nextInt(999999);
        System.out.println("Sending OTP to user " + otpNumber);
        boolean isSmsSent = smsTwoFactorService.send2FaCodeAsEmail(restaurantDetails.getRestaurantPrimaryEmailId(), String.format("%06d", otpNumber));
        if(isSmsSent)
            return ResponseEntity.status(HttpStatus.OK).build();
        else
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

    }

    @RequestMapping(value = "/verifyOTPandRegisterRestaurant", method = RequestMethod.POST)
    public ResponseEntity<?> verifyOTPandRegisterRestaurant(@RequestBody String restaurantRegisterForm) {

        System.out.println(restaurantRegisterForm);
        return ResponseEntity.status(HttpStatus.OK).build();
    }


    @RequestMapping(value = "/deliveryAgentRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> deliveryAgentRegistration(@RequestBody DeliveryAgentDetails deliveryAgentDetails) {

        Random rnd = new Random();
        int otpNumber = rnd.nextInt(999999);
        boolean isSmsSent = smsTwoFactorService.send2FaCodeAsEmailDA(deliveryAgentDetails.getDA_email(), String.format("%06d", otpNumber));

        if(isSmsSent)
            return ResponseEntity.status(HttpStatus.OK).build();
        else
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @RequestMapping(value = "/verifyOTPandRegisterUser", method = RequestMethod.POST)
    public ResponseEntity<?> verifyOTPandRegisterUser(@RequestBody UserRegisterForm userRegisterForm) {

        UsersOtp userOtp = usersOtpRepository.findByuserEmail(userRegisterForm.getUser_email());
        boolean checkOtpMatch = OtpUtils.checkIfOtpMatches(userRegisterForm.getUser_otp(), userOtp.getUserOtp());

        if (checkOtpMatch) {
            usersOtpRepository.deleteById(userRegisterForm.getUser_email());
            return userRegistrationService.registerUser(userRegisterForm);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @RequestMapping(value = "/verifyOTPandRegisterDA", method = RequestMethod.POST)
    public ResponseEntity<?> verifyOTPandRegisterDA(@RequestBody DeliveryAgentRegisterForm daRegisterForm) {

        Delivery_Agent_Otp daOtp = deliveryAgentOtpRepository.findBydaEmail(daRegisterForm.getDA_email());
        boolean checkOtpMatch = OtpUtils.checkIfDAOtpMatches(daRegisterForm.getDA_otp(), daOtp.daOtp);

        if (checkOtpMatch) {
            deliveryAgentOtpRepository.deleteById(daRegisterForm.getDA_email());
            return deliveryAgentRegistrationService.registerDeliveryAgent(daRegisterForm);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

}
