package com.app.yumdrop.Service;

import com.app.yumdrop.FormEntity.RestaurantRegisterForm;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface RestaurantRegistrationService {
    ResponseEntity<?> registerRestaurant(@RequestBody RestaurantRegisterForm restaurantRegisterForm);
}
