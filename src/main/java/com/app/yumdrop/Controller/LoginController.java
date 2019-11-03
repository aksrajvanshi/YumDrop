package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.FormEntity.UserLoginDetails;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Utils.PasswordUtils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collections;
import java.util.Map;

@ComponentScan
@Controller
public class LoginController {

    @Autowired
    private UsersRepository userRepository;

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
    public ResponseEntity<?> restaurantLogin(@RequestBody String restaurantDetaiks) {
        System.out.println(restaurantDetaiks);
        System.out.println(ResponseEntity.status(HttpStatus.OK).body("wrong pass"));
        return  ResponseEntity.status(HttpStatus.OK).build();

    }



    @RequestMapping(value = "/setNewRestaurantPassword", method = RequestMethod.POST)
    public ResponseEntity<?> setNewRestaurantPassword(@RequestBody String restaurantDetaiks) {
        System.out.println(restaurantDetaiks);
        return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Wrong Password");

    }



    @RequestMapping(value = "/forgotRestaurantPassword", method = RequestMethod.POST)
    public ResponseEntity<?> forgotRestaurantPassword(@RequestBody String restaurantDetaiks) {
        System.out.println(restaurantDetaiks);
        return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Wrong Password");

    }

    @RequestMapping(value = "/userLocation", method = RequestMethod.POST)
    public ResponseEntity<?> userLocation(@RequestBody String restaurantDetaiks) {
        System.out.println(restaurantDetaiks);
        return  ResponseEntity.status(HttpStatus.OK).build();

    }

    @RequestMapping(value = "/getUserDetails", method = RequestMethod.GET)
    public  @ResponseBody String getString() {
        return "{\"userName\":1, \"userEmailId\":\"foo\"}";
    }



}
