package com.app.yumdrop.Service;

import org.springframework.http.ResponseEntity;

public interface RestaurantSearchService {

    ResponseEntity<?> getRestaurantResultsByLocationFromPublicPage(String userAddress, String restaurantSearchKeyword, Double minimumRating, int maximumDistance);

    ResponseEntity<?> getRestaurantResultsByLocationFromDashboard(String userAddress, String userEmail, String restaurantSearchKeyword, Double minimumRating, int maximumDistance);

    ResponseEntity<?> getAllRestaurantDetails(String userAddress);

    ResponseEntity<?> getRestaurantResultsByRatings(String userAddress);

    ResponseEntity<?> getSingleRestaurantDetail(String restaurantId);

}
