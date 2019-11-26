package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.RestaurantMenuItem;
import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.Repository.RestaurantMenuItemRepository;
import com.app.yumdrop.Repository.RestaurantRepository;
import com.app.yumdrop.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@ComponentScan
@Controller
public class LoadDashboardDataController {

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    RestaurantMenuItemRepository restaurantMenuItemRepository;

    @RequestMapping(value = "/getUserDataForDashboard", method = RequestMethod.POST)
    public ResponseEntity<?> loadUserDataForDashboard(@RequestBody Users user) {
        System.out.print("Inside this");
        Users userData = usersRepository.findByuserEmail(user.getUserEmail());
        return new ResponseEntity<>(userData, HttpStatus.OK);
    }

    @RequestMapping(value = "/getRestaurantDataForDashboard", method = RequestMethod.POST)
    public ResponseEntity<?> loadRestaurantDataForDashboard(@RequestBody Restaurant restaurantData) {

        Restaurant restaurantDataForDashboard = restaurantRepository.findByrestaurantId(restaurantData.getRestaurantId());
        return new ResponseEntity<>(restaurantDataForDashboard, HttpStatus.OK);
    }

    @RequestMapping(value = "/getAllRestaurantDishes", method = RequestMethod.POST)
    public ResponseEntity<?> loadDishDataForRestaurant(@RequestBody Restaurant restaurantData) {

        List<RestaurantMenuItem> restaurantDishDataForDashboard = restaurantMenuItemRepository.findByrestaurantId(restaurantData.getRestaurantId());
        return new ResponseEntity<>(restaurantDishDataForDashboard, HttpStatus.OK);
    }



}
