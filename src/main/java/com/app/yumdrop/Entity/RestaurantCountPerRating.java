package com.app.yumdrop.Entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "restaurant_count_per_rating")
@IdClass(RestaurantCountPerRatingId.class)
public class RestaurantCountPerRating {

    @Id
    @NotNull
    @Column(name = "restaurant_id", nullable = false)
    private String restaurantId;

    @Id
    @NotNull
    @Column(name = "restaurant_rating", nullable = false)
    private int restaurantRating;

    @NotNull
    @Column(name = "rating_count", nullable = false)
    private int ratingCount;

    public RestaurantCountPerRating() {
    }

    public RestaurantCountPerRating(@NotNull String restaurantId, @NotNull int restaurantRating, @NotNull int ratingCount) {
        this.restaurantId = restaurantId;
        this.restaurantRating = restaurantRating;
        this.ratingCount = ratingCount;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public int getRestaurantRating() {
        return restaurantRating;
    }

    public void setRestaurantRating(int restaurantRating) {
        this.restaurantRating = restaurantRating;
    }

    public int getRatingCount() {
        return ratingCount;
    }

    public void setRatingCount(int ratingCount) {
        this.ratingCount = ratingCount;
    }
}
