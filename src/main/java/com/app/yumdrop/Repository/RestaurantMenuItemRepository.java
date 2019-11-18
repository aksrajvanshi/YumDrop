package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.RestaurantMenuItem;
import com.app.yumdrop.Entity.RestaurantMenuItemId;
import org.springframework.data.repository.CrudRepository;

public interface RestaurantMenuItemRepository extends CrudRepository<RestaurantMenuItem, RestaurantMenuItemId> {

}
