package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.RestaurantManager;
import com.app.yumdrop.Entity.RestaurantManagerId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RestaurantManagerRepository extends MongoRepository<RestaurantManager, RestaurantManagerId> {

    List<RestaurantManager> findByrestaurantId(String restaurantId);

}
