package com.app.yumdrop.Controller;

import com.app.yumdrop.FormEntity.RestaurantRating;
import com.app.yumdrop.Service.RateRestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@ComponentScan
@Controller
public class RateRestaurantController {

    @Autowired
    RateRestaurantService rateRestaurantService;

    @RequestMapping(value = "/rateRestaurant", method = RequestMethod.POST)
    public ResponseEntity<?> rateRestaurantByUser(@RequestBody RestaurantRating restaurantRating) {
        return rateRestaurantService.addRestaurantRating(restaurantRating);
    }

}
