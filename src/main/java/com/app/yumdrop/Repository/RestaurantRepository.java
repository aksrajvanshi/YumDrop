package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RestaurantRepository extends MongoRepository<Restaurant, String> {

    Restaurant findByrestaurantId(String restaurantId);

    @Query(nativeQuery = true, value = "SELECT * FROM restaurant_main WHERE LOWER(restaurant_name) LIKE LOWER('%' || ?1 || '%')")
    List<Restaurant> findByrestaurantName(String givenRestaurantName);
}
