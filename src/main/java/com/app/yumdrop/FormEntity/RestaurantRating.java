package com.app.yumdrop.FormEntity;

public class RestaurantRating {

    private String restaurantId;

    private int restaurantRating;

    public RestaurantRating() {
    }

    public RestaurantRating(String restaurantId, int restaurantRating) {
        this.restaurantId = restaurantId;
        this.restaurantRating = restaurantRating;
    }

    @Override
    public String toString() {
        return "RestaurantRating{" +
                "restaurantId='" + restaurantId + '\'' +
                ", restaurantRating=" + restaurantRating +
                '}';
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
}
