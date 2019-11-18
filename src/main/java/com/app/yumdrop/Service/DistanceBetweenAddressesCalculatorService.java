package com.app.yumdrop.Service;

import com.app.yumdrop.FormEntity.RestaurantSearchResults;
import org.springframework.http.ResponseEntity;

public interface DistanceBetweenAddressesCalculatorService {

    void calculateDistance(String userAddress, RestaurantSearchResults restaurantSearchResults);
}
