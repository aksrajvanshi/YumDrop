package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.RestaurantRatings;
import org.springframework.data.repository.CrudRepository;

public interface RestaurantRatingsRepository extends CrudRepository<RestaurantRatings, String> {

    RestaurantRatings findByrestaurantId(String restaurantId);
}
