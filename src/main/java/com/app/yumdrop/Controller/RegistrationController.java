package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.RestaurantOtp;
import com.app.yumdrop.Entity.UsersOtp;
import com.app.yumdrop.FormEntity.RestaurantDetails;
import com.app.yumdrop.FormEntity.RestaurantRegisterForm;
import com.app.yumdrop.FormEntity.UserRegisterForm;
import com.app.yumdrop.FormEntity.UsersDetails;
import com.app.yumdrop.Repository.*;
import com.app.yumdrop.Service.DeliveryAgentRegistrationService;
import com.app.yumdrop.Service.RestaurantRegistrationService;
import com.app.yumdrop.Service.SmsTwoFactorService;
import com.app.yumdrop.Service.UserRegistrationService;
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
    RestaurantRegistrationService restaurantRegistrationService;
    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    RestaurantOtpRepository restaurantOtpRepository;
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
        boolean isMailSentToUser = smsTwoFactorService.send2FaCodeAsEmail(usersDetails.getUser_email(), String.format("%06d", otpNumber));
        if (isMailSentToUser)
            return ResponseEntity.status(HttpStatus.OK).build();
        else
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @RequestMapping(value = "/restaurantRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> restaurantRegistration(@RequestBody RestaurantDetails restaurantDetails) {

        Restaurant isRestaurantExisting = restaurantRepository.findByrestaurantId(restaurantDetails.getRestaurantId());
        if (isRestaurantExisting != null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

        Random rnd = new Random();
        int otpNumber = rnd.nextInt(999999);
        System.out.println("Sending OTP to user " + otpNumber);
        boolean isMailSentToPrimaryManager = smsTwoFactorService.send2FaCodeAsEmailToRestaurant(restaurantDetails.getRestaurantPrimaryEmailId(), restaurantDetails.getRestaurantId(), String.format("%06d", otpNumber));
        if (isMailSentToPrimaryManager)
            return ResponseEntity.status(HttpStatus.OK).build();
        else
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

    }

    @RequestMapping(value = "/verifyOTPandRegisterRestaurant", method = RequestMethod.POST)
    public ResponseEntity<?> verifyOTPandRegisterRestaurant(@RequestBody RestaurantRegisterForm restaurantRegisterForm) {


        RestaurantOtp restaurantOtpRecord = restaurantOtpRepository.findByrestaurantID(restaurantRegisterForm.getRestaurantId());
        boolean checkOtpMatch = OtpUtils.checkIfOtpMatches(restaurantRegisterForm.getRestaurantOtp().trim(), restaurantOtpRecord.getRestaurantOtp());

        if (checkOtpMatch) {
            restaurantOtpRepository.deleteById(restaurantOtpRecord.getRestaurantID());
            return restaurantRegistrationService.registerRestaurant(restaurantRegisterForm);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


    @RequestMapping(value = "/verifyOTPandRegisterUser", method = RequestMethod.POST)
    public ResponseEntity<?> verifyOTPandRegisterUser(@RequestBody UserRegisterForm userRegisterForm) {

        UsersOtp userOtp = usersOtpRepository.findByuserEmail(userRegisterForm.getUser_email());
        boolean checkOtpMatch = OtpUtils.checkIfOtpMatches(userRegisterForm.getUser_otp().trim(), userOtp.getUserOtp());

        if (checkOtpMatch) {
            usersOtpRepository.deleteById(userRegisterForm.getUser_email());
            return userRegistrationService.registerUser(userRegisterForm);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }


}
