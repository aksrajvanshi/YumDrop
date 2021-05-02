package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.RestaurantRatings;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RestaurantRatingsRepository extends MongoRepository<RestaurantRatings, String> {

    RestaurantRatings findByrestaurantId(String restaurantId);
}
