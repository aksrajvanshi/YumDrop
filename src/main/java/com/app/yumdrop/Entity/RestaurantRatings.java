package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "restaurant_rating_main")
public class RestaurantRatings {

    @Id
    @NotNull
    @Column(name = "restaurant_id", nullable = false)
    private String restaurantId;

    @NotNull
    @Column(name = "overall_rating", nullable = false)
    private double overallRating;

    @NotNull
    @Column(name = "number_of_users", nullable = false)
    private int numberOfUsers;


    public RestaurantRatings() {
    }


    @Override
    public String toString() {
        return "RestaurantRatings{" +
                "restaurantId='" + restaurantId + '\'' +
                ", overallRating=" + overallRating +
                ", numberOfUsers=" + numberOfUsers +
                '}';
    }

    public RestaurantRatings(@NotNull String restaurantId, @NotNull double overallRating, @NotNull int numberOfUsers) {
        this.restaurantId = restaurantId;
        this.overallRating = overallRating;
        this.numberOfUsers = numberOfUsers;
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
