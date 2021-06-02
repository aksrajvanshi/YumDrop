package com.app.yumdrop.FormEntity;

public class RestaurantManagerLogin {

    public String restaurantId;

    public String restaurantPrimaryEmailId;

    public String password;

    public RestaurantManagerLogin() {
    }

    public RestaurantManagerLogin(String restaurantId, String restaurantPrimaryEmailId, String password) {
        this.restaurantId = restaurantId;
        this.restaurantPrimaryEmailId = restaurantPrimaryEmailId;
        this.password = password;
    }

    @Override
    public String toString() {
        return "RestaurantManagerLogin{" + "restaurantId='" + restaurantId + '\'' + ", restaurantPrimaryEmailId='"
                + restaurantPrimaryEmailId + '\'' + ", password='" + password + '\'' + '}';
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
