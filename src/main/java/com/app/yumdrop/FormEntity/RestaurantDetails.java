package com.app.yumdrop.FormEntity;

import javax.persistence.Id;

public class RestaurantDetails {


        @Id
        public String restaurantId;
        public String restaurantPrimaryEmailId;

        public RestaurantDetails(){

        }

    public RestaurantDetails(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public RestaurantDetails(String restaurantId, String restaurantPrimaryEmailId) {
        this.restaurantId = restaurantId;
        this.restaurantPrimaryEmailId = restaurantPrimaryEmailId;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getRestaurantPrimaryEmailId() {
        return restaurantPrimaryEmailId;
    }

    public void setRestaurantPrimaryEmailId(String restaurantPrimaryEmailId) {
        this.restaurantPrimaryEmailId = restaurantPrimaryEmailId;
    }
}
