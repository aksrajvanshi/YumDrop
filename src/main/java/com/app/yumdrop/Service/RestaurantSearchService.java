package com.app.yumdrop.Service;

import org.springframework.http.ResponseEntity;

public interface RestaurantSearchService {

    ResponseEntity<?> getRestaurantResultsByLocation(String userAddress);

    ResponseEntity<?> getAllRestaurantDetails(String userAddress);

    ResponseEntity<?> getRestaurantResultsByRatings(String userAddress);

}
