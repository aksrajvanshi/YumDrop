package com.app.yumdrop.FormEntity;

public class RestaurantSearchRequest {

    String userAddress;

    String restaurantSearchKeyword;

    String userEmail;

    public RestaurantSearchRequest() {
    }

    public RestaurantSearchRequest(String userAddress, String restaurantSearchKeyword, String userEmail) {
        this.userAddress = userAddress;
        this.restaurantSearchKeyword = restaurantSearchKeyword;
        this.userEmail = userEmail;
    }

    public RestaurantSearchRequest(String userAddress) {
        this.userAddress = userAddress;
    }

    public RestaurantSearchRequest(String userAddress, String restaurantSearchKeyword) {
        this.userAddress = userAddress;
        this.restaurantSearchKeyword = restaurantSearchKeyword;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public String getRestaurantSearchKeyword() {
        return restaurantSearchKeyword;
    }

    public void setRestaurantSearchKeyword(String restaurantSearchKeyword) {
        this.restaurantSearchKeyword = restaurantSearchKeyword;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
}
