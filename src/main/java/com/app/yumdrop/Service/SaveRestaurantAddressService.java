package com.app.yumdrop.Service;

import com.app.yumdrop.Entity.Restaurant;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface SaveRestaurantAddressService {

    ResponseEntity<?> saveRestaurantAddress(@RequestBody Restaurant restaurantDetailsWithAddress);

}
