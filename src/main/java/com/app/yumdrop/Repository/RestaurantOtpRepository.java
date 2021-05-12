package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.RestaurantOtp;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RestaurantOtpRepository extends MongoRepository<RestaurantOtp, String> {

    RestaurantOtp findByrestaurantId(String restaurantId);
}
