package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.RestaurantCountPerRating;
import com.app.yumdrop.Entity.RestaurantCountPerRatingId;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RestaurantCountPerRatingRepository extends CrudRepository<RestaurantCountPerRating, RestaurantCountPerRatingId> {

    List<RestaurantCountPerRating> findByrestaurantId(String restaurantId);
}