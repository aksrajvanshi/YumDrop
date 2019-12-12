package com.app.yumdrop.Entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "restaurant_menu_item")
@IdClass(RestaurantMenuItemId.class)
public class RestaurantMenuItem {

    @Id
    @NotNull
    @Column(name = "restaurant_id", nullable = false)
    private String restaurantId;

    @Id
    @NotNull
    @Column(name = "dish_name", nullable = false)
    private String dishName;

    @Column(name = "dish_desc", nullable = false)
    private String dishDescription;

    @Column(name = "dish_price", nullable = false)
    private double dishPrice;

    @Column(name = "dish_available", nullable = false)
    private boolean dishAvailable;

    @Column(name = "dish_photo_url")
    private String dishPhotoUrl;

    @Override
    public String toString() {
        return "RestaurantMenuItem{" +
                "restaurantId='" + restaurantId + '\'' +
                ", dishName='" + dishName + '\'' +
                ", dishDescription='" + dishDescription + '\'' +
                ", dishPrice=" + dishPrice +
                ", dishAvailable=" + dishAvailable +
                ", dishPhotoUrl=" + dishPhotoUrl +
                '}';
    }

    public RestaurantMenuItem() {
    }

    public RestaurantMenuItem(@NotNull String restaurantId, @NotNull String dishName) {
        this.restaurantId = restaurantId;
        this.dishName = dishName;
    }

    public RestaurantMenuItem(@NotNull String restaurantId, @NotNull String dishName, String dishPhotoUrl) {
        this.restaurantId = restaurantId;
        this.dishName = dishName;
        this.dishPhotoUrl = dishPhotoUrl;
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


    public RestaurantMenuItem(@NotNull String restaurantId, @NotNull String dishName, String dishDescription, double dishPrice, boolean dishAvailable, String dishPhotoUrl) {
        this.restaurantId = restaurantId;
        this.dishName = dishName;
        this.dishDescription = dishDescription;
        this.dishPrice = dishPrice;
        this.dishAvailable = dishAvailable;
        this.dishPhotoUrl = dishPhotoUrl;
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

    public String isDishPhotoUrl() {
        return dishPhotoUrl;
    }

    public void setDishPhotoUrl(String dishPhotoUrl) {
        this.dishPhotoUrl = dishPhotoUrl;
    }
}
