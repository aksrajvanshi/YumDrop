package com.app.yumdrop.FormEntity;

public class Restaurant {

    String restaurantImage;
    String restaurantName;
    String[] restaurantTags;

    public Restaurant(String image, String name, String[] tags) {
        this.restaurantImage = image;
        this.restaurantName = name;
        this.restaurantTags = tags;
    }

    public String getRestaurantImage(){
        return restaurantImage;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public String[] getRestaurantTags() {
        return restaurantTags;
    }
}
