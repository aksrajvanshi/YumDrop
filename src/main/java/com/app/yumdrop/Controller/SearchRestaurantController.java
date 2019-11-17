package com.app.yumdrop.Controller;

import com.app.yumdrop.Repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@ComponentScan
@Controller
public class SearchRestaurantController {

    @Autowired
    RestaurantRepository restaurantRepository;

    @RequestMapping(value = "/searchRestaurantByLocation", method = RequestMethod.POST)
    public ResponseEntity<?> searchRestaurantByLocation(@RequestParam("userAddress") String userAddress, @RequestParam("restaurantSearchKeyword") String restaurantSearchKeyword) {
        return null;
    }

    @RequestMapping(value = "/getAllRestaurants", method = RequestMethod.POST)
    public ResponseEntity<?> getAllRestaurants(@RequestParam("userAddress") String userAddress) {
        return null;
    }

}
