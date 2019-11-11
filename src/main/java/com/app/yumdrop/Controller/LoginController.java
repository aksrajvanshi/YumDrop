package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.RestaurantManager;
import com.app.yumdrop.Entity.RestaurantManagerId;
import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.FormEntity.RestaurantManagerLogin;
import com.app.yumdrop.FormEntity.UserLoginDetails;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.RestaurantManagerRepository;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@ComponentScan
@Controller
public class LoginController {

    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private RestaurantManagerRepository restaurantManagerRepository;

    @RequestMapping(value = "/loginDataForm", method = RequestMethod.POST)
    public ResponseEntity<?> userLogin(@RequestBody UserLoginDetails usersDetails) {

        Users loggedInUser = userRepository.findByuserEmail(usersDetails.getUser_name());
        if (loggedInUser == null) {
            ErrorMessage userNotFound = new ErrorMessage(new Date(), "User doesn't exist!",
                    "");
            return new ResponseEntity<>(userNotFound, HttpStatus.NOT_FOUND);
        }

        if (loggedInUser.getUserEmail().equals(usersDetails.getUser_name())
                && PasswordUtils.checkIfPasswordMatches(usersDetails.getUserPassword(), loggedInUser.getUserPassword())) {
            SuccessMessage successfulLoginMessage = new SuccessMessage(new Date(), "Successfully logged in");
            return new ResponseEntity<>(successfulLoginMessage, HttpStatus.OK);
        } else {
            ErrorMessage incorrectPassword = new ErrorMessage(new Date(), "Incorrect Credentials. Please login with the right credentials",
                    "");
            return new ResponseEntity<>(incorrectPassword, HttpStatus.BAD_REQUEST);
        }

    }

    @RequestMapping(value = "/restaurantLogin", method = RequestMethod.POST)
    public ResponseEntity<?> restaurantManagerLogin(@RequestBody RestaurantManagerLogin restaurantManagerLogin){

        Optional<RestaurantManager> restaurantManager = restaurantManagerRepository.findById(new RestaurantManagerId(restaurantManagerLogin.getRestaurantId(), restaurantManagerLogin.getRestaurantPrimaryEmailId()));

        if(restaurantManager == null){
            ErrorMessage restaurantManagerNotFound = new ErrorMessage(new Date(), "Record doesn't exist!",
                    "");
            return new ResponseEntity<>(restaurantManagerNotFound, HttpStatus.NOT_FOUND);
        }

        boolean doesPasswordMatch = PasswordUtils.checkIfPasswordMatches(restaurantManagerLogin.getPassword(), restaurantManager.get().getRestaurantManagerPassword());

        if(doesPasswordMatch) {
            SuccessMessage successfulLoginMessage = new SuccessMessage(new Date(), "Successfully logged in");
            return new ResponseEntity<>(successfulLoginMessage, HttpStatus.OK);
        }
        else{
            ErrorMessage incorrectPassword = new ErrorMessage(new Date(), "Incorrect Credentials. Please login with the right credentials",
                    "");
            return new ResponseEntity<>(incorrectPassword, HttpStatus.BAD_REQUEST);
        }


    }



}
