package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.UserRestaurantRatings;
import com.app.yumdrop.Entity.UserRestaurantRatingsId;
import org.springframework.data.repository.CrudRepository;

public interface UserRestaurantRatingsRepository extends CrudRepository<UserRestaurantRatings, UserRestaurantRatingsId> {

}
