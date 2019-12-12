package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.RestaurantOtp;
import com.app.yumdrop.Entity.UsersOtp;
import com.app.yumdrop.FormEntity.RestaurantDetails;
import com.app.yumdrop.FormEntity.RestaurantRegisterForm;
import com.app.yumdrop.FormEntity.UserRegisterForm;
import com.app.yumdrop.FormEntity.UsersDetails;
import com.app.yumdrop.Messages.ErrorMessage;
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

import java.util.Date;
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
        boolean isMailSentToManager = smsTwoFactorService.send2FaCodeAsEmailToRestaurant(restaurantDetails.getRestaurantPrimaryEmailId(), restaurantDetails.getRestaurantId(), String.format("%06d", otpNumber));
        if (isMailSentToManager)
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
            ErrorMessage otpNotMatching = new ErrorMessage(new Date(), "OTP didn't match!",
                    "");
            return new ResponseEntity<>(otpNotMatching, HttpStatus.BAD_REQUEST);
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
            ErrorMessage otpNotMatching = new ErrorMessage(new Date(), "OTP didn't match!",
                    "");
            return new ResponseEntity<>(otpNotMatching, HttpStatus.BAD_REQUEST);
        }

    }

    @RequestMapping(value = "/getAllReccommendedRestaurants", method = RequestMethod.POST)
    public ResponseEntity<?> getAllReccommendedRestaurants() {


        return new ResponseEntity<>("[\n" +
                "    {\n" +
                "        \"restaurantName\": \"Indian Palace\",\n" +

                "        \"averagePrice\": \"15$\",\n" +
                "        \"restaurantId\": \"IndianPalace\",\n" +
                "        \"restaurantAddress\": \"4506 E 3rd St, Bloomington, IN 47401\",\n" +
                "        \"restaurantImageURL\": \"https://assets3.thrillist.com/v1/image/2793388/size/gn-gift_guide_variable_c.jpg\"\n" +
                "    },\n" +
                "    {\n" +
                "        \"restaurantName\": \"Qdoba\",\n" +
                "        \"restaurantId\": \"Qdoba\",\n" +
                "        \"averagePrice\": \"8$\",\n" +
                "        \"restaurantAddress\": \"116 S Indiana Ave Suite 200, Bloomington, IN 47401\",\n" +
                "        \"restaurantImageURL\": \"https://cdn.vox-cdn.com/thumbor/zBEzySds-coOKCa7Ymm2H56gr6A=/0x0:3500x2336/1200x800/filters:focal(1470x888:2030x1448)/cdn.vox-cdn.com/uploads/chorus_image/image/58037473/L_Omaha-1-2.0.0.jpg\"\n" +
                "    },\n" +
                "    {\n" +
                "        \"restaurantName\": \"TacoBell\",\n" +
                "        \"restaurantId\": \"TacoBell\",\n" +
                "        \"averagePrice\": \"6$\",\n" +
                "        \"restaurantAddress\": \"Kirkwood, Bloomington, Indiana\",\n" +
                "        \"restaurantImageURL\": \"https://i.ytimg.com/vi/NEc2tZP5eBo/maxresdefault.jpg\"\n" +
                "    }\n" +


                "]", HttpStatus.OK);


    }


}
