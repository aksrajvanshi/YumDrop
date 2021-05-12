package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import javax.persistence.IdClass;

@Document("restaurantMenuItem")
@IdClass(RestaurantMenuItemId.class)
public class RestaurantMenuItem {

    @Id
    private String restaurantId;

    @Id
    private String dishName;

    private String dishDescription;

    private double dishPrice;

    private boolean dishAvailable;

    public RestaurantMenuItem() {
    }

    public RestaurantMenuItem(String restaurantId, String dishName, String dishDescription, double dishPrice) {
        this.restaurantId = restaurantId;
        this.dishName = dishName;
        this.dishDescription = dishDescription;
        this.dishPrice = dishPrice;
    }

    public RestaurantMenuItem(String restaurantId, String dishName, String dishDescription, double dishPrice, boolean dishAvailable) {
        this.restaurantId = restaurantId;
        this.dishName = dishName;
        this.dishDescription = dishDescription;
        this.dishPrice = dishPrice;
        this.dishAvailable = dishAvailable;
    }

    @Override
    public String toString() {
        return "RestaurantMenuItem{" +
                "restaurantId='" + restaurantId + '\'' +
                ", dishName='" + dishName + '\'' +
                ", dishDescription='" + dishDescription + '\'' +
                ", dishPrice=" + dishPrice +
                ", dishAvailable=" + dishAvailable +
                '}';
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getDishName() {
        return dishName;
    }

    public void setDishName(String dishName) {
        this.dishName = dishName;
    }

    public String getDishDescription() {
        return dishDescription;
    }

    public void setDishDescription(String dishDescription) {
        this.dishDescription = dishDescription;
    }

    public double getDishPrice() {
        return dishPrice;
    }

    public void setDishPrice(double dishPrice) {
        this.dishPrice = dishPrice;
    }

    public boolean isDishAvailable() {
        return dishAvailable;
    }

    public void setDishAvailable(boolean dishAvailable) {
        this.dishAvailable = dishAvailable;
    }
}
