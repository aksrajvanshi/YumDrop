package com.app.yumdrop.Service;

import com.app.yumdrop.FormEntity.RestaurantSearchResults;

public interface DistanceBetweenAddressesCalculatorService {

    void calculateDistance(String userAddress, RestaurantSearchResults restaurantSearchResults);

    long calculateDistanceBetweenDeliveryAgentAndRestaurant(String restaurantAddress, String deliveryAgentAddress);
}
