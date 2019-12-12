package com.app.yumdrop.Service;

import com.app.yumdrop.FormEntity.RestaurantRating;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface RateRestaurantService {

    ResponseEntity<?> addRestaurantRating(@RequestBody RestaurantRating restaurantRating);

}
