package com.app.yumdrop.Entity;

import java.io.Serializable;

public class RestaurantManagerId implements Serializable {

    private String restaurantId;

    private String restaurantManagerEmailId;

    public RestaurantManagerId() {
    }

    public RestaurantManagerId(String restaurantId, String restaurantManagerEmailId) {
        this.restaurantId = restaurantId;
        this.restaurantManagerEmailId = restaurantManagerEmailId;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getRestaurantManagerEmailId() {
        return restaurantManagerEmailId;
    }

    public void setRestaurantManagerEmailId(String restaurantManagerEmailId) {
        this.restaurantManagerEmailId = restaurantManagerEmailId;
    }
}
