package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.UsersAddress;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Service.SaveRestaurantAddressService;
import com.app.yumdrop.Service.SaveUserAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Date;

@ComponentScan
@Controller
public class SaveLocationController {

    @Autowired
    SaveUserAddressService saveUserAddressService;

    @Autowired
    SaveRestaurantAddressService saveRestaurantAddressService;

    @RequestMapping(value = "/saveUserAddress", method = RequestMethod.POST)
    public ResponseEntity<?> saveUserAddress(@RequestBody UsersAddress usersAddress){

        return saveUserAddressService.saveUserAddress(usersAddress);
    }

    @RequestMapping(value = "/saveRestaurantAddress", method = RequestMethod.POST)
    public ResponseEntity<?> saveRestaurantAddress(@RequestBody Restaurant restaurantWithAddress){

        return saveRestaurantAddressService.saveRestaurantAddress(restaurantWithAddress);
    }

}
