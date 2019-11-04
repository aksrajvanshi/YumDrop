package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.Restaurant;
import org.springframework.data.repository.CrudRepository;

public interface RestaurantRepository extends CrudRepository<Restaurant, String> {

    Restaurant findByrestaurantId(String restaurantId);
}
