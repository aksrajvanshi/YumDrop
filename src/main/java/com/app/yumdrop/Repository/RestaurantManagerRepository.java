package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.RestaurantManager;
import com.app.yumdrop.Entity.RestaurantManagerId;
import com.app.yumdrop.Entity.RestaurantOtp;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RestaurantManagerRepository extends CrudRepository<RestaurantManager, RestaurantManagerId> {

    List<RestaurantManager> findByrestaurantId(String restaurantId);

}
