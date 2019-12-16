package com.app.yumdrop.FormEntity;

public class RestaurantSearchRequest {

    String userAddress;

    String restaurantSearchKeyword;

    String userEmail;

    Double minimumRating;

    int maximumDistance;

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

    public RestaurantSearchRequest(String userAddress, String restaurantSearchKeyword, Double minimumRating, int maximumDistance) {
        this.userAddress = userAddress;
        this.restaurantSearchKeyword = restaurantSearchKeyword;
        this.minimumRating = minimumRating;
        this.maximumDistance = maximumDistance;
    }

    public RestaurantSearchRequest(String userAddress, String restaurantSearchKeyword, String userEmail, Double minimumRating, int maximumDistance) {
        this.userAddress = userAddress;
        this.restaurantSearchKeyword = restaurantSearchKeyword;
        this.userEmail = userEmail;
        this.minimumRating = minimumRating;
        this.maximumDistance = maximumDistance;
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

    public Double getMinimumRating() {
        return minimumRating;
    }

    public void setMinimumRating(Double minimumRating) {
        this.minimumRating = minimumRating;
    }

    public int getMaximumDistance() {
        return maximumDistance;
    }

    public void setMaximumDistance(int maximumDistance) {
        this.maximumDistance = maximumDistance;
    }
}
