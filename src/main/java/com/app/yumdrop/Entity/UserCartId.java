package com.app.yumdrop.Entity;

import java.io.Serializable;

public class UserCartId implements Serializable {

    private String userEmail;

    private String dishName;

    private String restaurantId;

    public UserCartId() {
    }

    public UserCartId(String userEmail, String restaurantId) {
        this.userEmail = userEmail;
        this.restaurantId = restaurantId;
    }

    public UserCartId(String userEmail, String dishName, String restaurantId) {
        this.userEmail = userEmail;
        this.dishName = dishName;
        this.restaurantId = restaurantId;
    }

    @Override
    public String toString() {
        return "UserCartId{" +
                "userEmail='" + userEmail + '\'' +
                ", dishName='" + dishName + '\'' +
                ", restaurantId='" + restaurantId + '\'' +
                '}';
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getDishName() {
        return dishName;
    }

    public void setDishName(String dishName) {
        this.dishName = dishName;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }
}
