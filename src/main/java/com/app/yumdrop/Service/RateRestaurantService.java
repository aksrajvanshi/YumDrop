package com.app.yumdrop.Service;

import com.app.yumdrop.Entity.UserRestaurantRatings;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface RateRestaurantService {

    ResponseEntity<?> addRestaurantRating(@RequestBody UserRestaurantRatings userRestaurantRatings);

}
