package com.app.yumdrop.Service;

import org.springframework.http.ResponseEntity;

public interface DistanceBetweenAddressesCalculatorService {

    void calculateDistance(String userAddress, String restaurantAddress);
}
