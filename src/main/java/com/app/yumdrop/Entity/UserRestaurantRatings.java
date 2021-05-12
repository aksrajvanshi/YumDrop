package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.validation.constraints.NotNull;

@Document("userRestaurantRatings")
@IdClass(UserRestaurantRatingsId.class)
public class UserRestaurantRatings {

    @Id
    private String userEmail;

    @Id
    private String restaurantId;

    private double restaurantRating;

    public UserRestaurantRatings() {
    }


    public UserRestaurantRatings(String userEmail, String restaurantId) {
        this.userEmail = userEmail;
        this.restaurantId = restaurantId;
    }

    public UserRestaurantRatings(String userEmail, String restaurantId, double restaurantRating) {
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
