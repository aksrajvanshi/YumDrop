package com.app.yumdrop.Entity;

import java.io.Serializable;

public class UserRestaurantRatingsId implements Serializable {

    private String userEmail;

    private String restaurantId;

    public UserRestaurantRatingsId() {
    }

    public UserRestaurantRatingsId(String userEmail, String restaurantId) {
        this.userEmail = userEmail;
        this.restaurantId = restaurantId;
    }

    @Override
    public String toString() {
        return "UserRestaurantRatingsId{" + "userEmail='" + userEmail + '\'' + ", restaurantId='" + restaurantId + '\''
                + '}';
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }
}
