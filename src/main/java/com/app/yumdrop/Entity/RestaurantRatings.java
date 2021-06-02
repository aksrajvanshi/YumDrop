package com.app.yumdrop.Entity;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("restaurantRatingMain")
public class RestaurantRatings {

    @Id
    private String restaurantId;

    private double overallRating;

    private int numberOfUsers;

    public RestaurantRatings() {
    }

    public RestaurantRatings(String restaurantId, double overallRating, int numberOfUsers) {
        this.restaurantId = restaurantId;
        this.overallRating = overallRating;
        this.numberOfUsers = numberOfUsers;
    }

    @Override
    public String toString() {
        return "RestaurantRatings{" + "restaurantId='" + restaurantId + '\'' + ", overallRating=" + overallRating
                + ", numberOfUsers=" + numberOfUsers + '}';
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public double getOverallRating() {
        return overallRating;
    }

    public void setOverallRating(double overallRating) {
        this.overallRating = overallRating;
    }

    public int getNumberOfUsers() {
        return numberOfUsers;
    }

    public void setNumberOfUsers(int numberOfUsers) {
        this.numberOfUsers = numberOfUsers;
    }
}
