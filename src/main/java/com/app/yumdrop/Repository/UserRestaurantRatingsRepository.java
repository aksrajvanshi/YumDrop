package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.UserRestaurantRatings;
import com.app.yumdrop.Entity.UserRestaurantRatingsId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRestaurantRatingsRepository
        extends MongoRepository<UserRestaurantRatings, UserRestaurantRatingsId> {

}
