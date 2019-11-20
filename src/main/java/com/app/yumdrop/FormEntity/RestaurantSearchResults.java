package com.app.yumdrop.FormEntity;

import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.RestaurantRatings;

public class RestaurantSearchResults {

    Restaurant restaurantDetails;

    RestaurantRatings restaurantRatings;

    long distanceFromUserInMeters;

    String distanceFromUserWithMetrics;


    public RestaurantSearchResults() {
    }

    public RestaurantSearchResults(Restaurant restaurantDetails, RestaurantRatings restaurantRatings, long distanceFromUserInMeters, String distanceFromUserWithMetrics) {
        this.restaurantDetails = restaurantDetails;
        this.restaurantRatings = restaurantRatings;
        this.distanceFromUserInMeters = distanceFromUserInMeters;
        this.distanceFromUserWithMetrics = distanceFromUserWithMetrics;
    }

    public Restaurant getRestaurantDetails() {
        return restaurantDetails;
    }

    public void setRestaurantDetails(Restaurant restaurantDetails) {
        this.restaurantDetails = restaurantDetails;
    }

    public RestaurantRatings getRestaurantRatings() {
        return restaurantRatings;
    }

    public void setRestaurantRatings(RestaurantRatings restaurantRatings) {
        this.restaurantRatings = restaurantRatings;
    }

    public long getDistanceFromUserInMeters() {
        return distanceFromUserInMeters;
    }

    public void setDistanceFromUserInMeters(long distanceFromUserInMeters) {
        this.distanceFromUserInMeters = distanceFromUserInMeters;
    }

    public String getDistanceFromUserWithMetrics() {
        return distanceFromUserWithMetrics;
    }

    public void setDistanceFromUserWithMetrics(String distanceFromUserWithMetrics) {
        this.distanceFromUserWithMetrics = distanceFromUserWithMetrics;
    }
}
