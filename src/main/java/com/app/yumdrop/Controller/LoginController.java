package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.RestaurantManager;
import com.app.yumdrop.Entity.RestaurantManagerId;
import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.FormEntity.RestaurantManagerLogin;
import com.app.yumdrop.FormEntity.UserLoginDetails;
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
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        if (loggedInUser.getUserEmail().equals(usersDetails.getUser_name())
                && PasswordUtils.checkIfPasswordMatches(usersDetails.getUserPassword(), loggedInUser.getUserPassword())) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @RequestMapping(value = "/restaurantLogin", method = RequestMethod.POST)
    public ResponseEntity<?> restaurantManagerLogin(@RequestBody RestaurantManagerLogin restaurantManagerLogin){

        Optional<RestaurantManager> restaurantManager = restaurantManagerRepository.findById(new RestaurantManagerId(restaurantManagerLogin.getRestaurantId(), restaurantManagerLogin.getRestaurantPrimaryEmailId()));
        boolean doesPasswordMatch = PasswordUtils.checkIfPasswordMatches(restaurantManagerLogin.getPassword(), restaurantManager.get().getRestaurantManagerPassword());

        if(doesPasswordMatch)
            return new ResponseEntity<>(HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }



}
