package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Document(collection = "user_restaurant_ratings")
@IdClass(UserRestaurantRatingsId.class)
public class UserRestaurantRatings {

    @Id
    @NotNull
    @Column(name = "user_email", nullable = false)
    private String userEmail;

    @Id
    @NotNull
    @Column(name = "restaurant_id", nullable = false)
    private String restaurantId;

    @NotNull
    @Column(name = "restaurant_rating", nullable = false)
    private double restaurantRating;

    public UserRestaurantRatings() {
    }


    public UserRestaurantRatings(@NotNull String userEmail, @NotNull String restaurantId) {
        this.userEmail = userEmail;
        this.restaurantId = restaurantId;
    }

    public UserRestaurantRatings(@NotNull String userEmail, @NotNull String restaurantId, @NotNull double restaurantRating) {
        this.userEmail = userEmail;
        this.restaurantId = restaurantId;
        this.restaurantRating = restaurantRating;
    }

    @Override
    public String toString() {
        return "UserRestaurantRatings{" +
                "userEmail='" + userEmail + '\'' +
                ", restaurantId='" + restaurantId + '\'' +
                ", restaurantRating=" + restaurantRating +
                '}';
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

    public double getRestaurantRating() {
        return restaurantRating;
    }

    public void setRestaurantRating(double restaurantRating) {
        this.restaurantRating = restaurantRating;
    }
}
