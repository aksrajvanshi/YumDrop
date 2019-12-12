package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.RestaurantOtp;
import org.springframework.data.repository.CrudRepository;

public interface RestaurantOtpRepository extends CrudRepository<RestaurantOtp, String> {

    RestaurantOtp findByrestaurantID(String restaurantId);
}
