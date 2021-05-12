package com.app.yumdrop.Entity;

import java.io.Serializable;

public class RestaurantMenuItemId implements Serializable {

    private String restaurantId;

    private String dishName;

    public RestaurantMenuItemId() {
    }

    public RestaurantMenuItemId(String restaurantId, String dishName) {
        this.restaurantId = restaurantId;
        this.dishName = dishName;
    }

    @Override
    public String toString() {
        return "RestaurantMenuItemId{" +
                "restaurantId='" + restaurantId + '\'' +
                ", dishName='" + dishName + '\'' +
                '}';
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getDishName() {
        return dishName;
    }

    public void setDishName(String dishName) {
        this.dishName = dishName;
    }
}
