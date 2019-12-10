package com.app.yumdrop.Service;

import org.springframework.http.ResponseEntity;

public interface RestaurantRecommendationService {

    ResponseEntity<?> getRecommendedRestaurants(String userEmail);

}
