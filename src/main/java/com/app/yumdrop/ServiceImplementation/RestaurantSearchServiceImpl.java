package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Repository.RestaurantRatingsRepository;
import com.app.yumdrop.Repository.RestaurantRepository;
import com.app.yumdrop.Repository.UserRestaurantRatingsRepository;
import com.app.yumdrop.Service.RestaurantSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public class RestaurantSearchServiceImpl implements RestaurantSearchService {

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    UserRestaurantRatingsRepository userRestaurantRatingsRepository;

    @Autowired
    RestaurantRatingsRepository restaurantRatingsRepository;

    @Override
    public ResponseEntity<?> getRestaurantResultsByLocation(String userAddress) {
        return null;
    }

    @Override
    public ResponseEntity<?> getAllRestaurantDetails(String userAddress) {
        return null;
    }

    @Override
    public ResponseEntity<?> getRestaurantResultsByRatings(String userAddress) {
        return null;
    }
}
