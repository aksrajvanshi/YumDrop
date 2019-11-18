package com.app.yumdrop.Controller;

import com.app.yumdrop.FormEntity.RestaurantSearchRequest;
import com.app.yumdrop.Service.RestaurantSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@ComponentScan
@Controller
public class SearchRestaurantController {

    @Autowired
    RestaurantSearchService restaurantSearchService;

    @RequestMapping(value = "/searchRestaurantByLocationFromPublicPage", method = RequestMethod.GET)
    public ResponseEntity<?> searchRestaurantByLocation(@RequestBody RestaurantSearchRequest restaurantSearchRequest) {
        return restaurantSearchService.getRestaurantResultsByLocationFromPublicPage(restaurantSearchRequest.getUserAddress(), restaurantSearchRequest.getRestaurantSearchKeyword());
    }

    @RequestMapping(value = "/searchRestaurantByLocationFromUserDashboard", method = RequestMethod.GET)
    public ResponseEntity<?> searchRestaurantByLocationFromUserDashboard(@RequestBody RestaurantSearchRequest restaurantSearchRequest) {
        return restaurantSearchService.getRestaurantResultsByLocationFromDashboard(restaurantSearchRequest.getUserAddress(), restaurantSearchRequest.getUserEmail(), restaurantSearchRequest.getRestaurantSearchKeyword());
    }

    @RequestMapping(value = "/getAllRestaurants", method = RequestMethod.GET)
    public ResponseEntity<?> getAllRestaurants(@RequestBody RestaurantSearchRequest restaurantSearchRequest) {
        return restaurantSearchService.getAllRestaurantDetails(restaurantSearchRequest.getUserAddress());
    }

}
