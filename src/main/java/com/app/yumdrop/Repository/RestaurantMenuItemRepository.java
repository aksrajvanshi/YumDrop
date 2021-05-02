package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.RestaurantMenuItem;
import com.app.yumdrop.Entity.RestaurantMenuItemId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RestaurantMenuItemRepository extends MongoRepository<RestaurantMenuItem, RestaurantMenuItemId> {

}
