package com.app.yumdrop.Service;

import org.springframework.http.ResponseEntity;

public interface RestaurantSearchService {

    ResponseEntity<?> getRestaurantResultsByLocationFromPublicPage(String userAddress, String restaurantSearchKeyword);

    ResponseEntity<?> getRestaurantResultsByLocationFromDashboard(String userAddress, String userEmail, String restaurantSearchKeyword);

    ResponseEntity<?> getAllRestaurantDetails(String userAddress);

    ResponseEntity<?> getRestaurantResultsByRatings(String userAddress);

}
