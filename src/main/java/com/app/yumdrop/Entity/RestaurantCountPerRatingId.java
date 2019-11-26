package com.app.yumdrop.Entity;

import java.io.Serializable;

public class RestaurantCountPerRatingId implements Serializable {

    private String restaurantId;

    private int restaurantRating;

    public RestaurantCountPerRatingId() {
    }

    public RestaurantCountPerRatingId(String restaurantId, int restaurantRating) {
        this.restaurantId = restaurantId;
        this.restaurantRating = restaurantRating;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public int getRestaurantRating() {
        return restaurantRating;
    }

    public void setRestaurantRating(int restaurantRating) {
        this.restaurantRating = restaurantRating;
    }
}
