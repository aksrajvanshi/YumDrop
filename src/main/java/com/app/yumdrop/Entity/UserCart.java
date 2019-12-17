package com.app.yumdrop.Entity;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user_pending_cart")
@IdClass(UserCartId.class)
public class UserCart {

    @Id
    @Column(name = "user_email", nullable = false)
    @Email(message = "user email should be a valid email")
    private String userEmail;


    @NotNull
    @Column(name = "dish_name", nullable = false)
    private String dishName;

    @NotNull
    @Column(name = "dish_quantity", nullable = false)
    private int dishQuantity;

    @NotNull
    @Column(name = "dish_price", nullable = false)
    private Double dishPrice;

    @Id
    @NotNull
    @Column(name = "restaurant_id", nullable = false)
    private String restaurantId;

    @Column(name = "dish_photo_url", nullable = false)
    private String dishPhotoUrl;

    public UserCart() {
    }

    public UserCart(@Email(message = "user email should be a valid email") String userEmail) {
        this.userEmail = userEmail;
    }

    public UserCart(@Email(message = "user email should be a valid email") String userEmail, String dishName, int dishQuantity) {
        this.userEmail = userEmail;
        this.dishName = dishName;
        this.dishQuantity = dishQuantity;
    }

    public UserCart(@Email(message = "user email should be a valid email") String userEmail, String dishName, int dishQuantity, String restaurantId) {
        this.userEmail = userEmail;
        this.dishName = dishName;
        this.dishQuantity = dishQuantity;
        this.restaurantId = restaurantId;
    }

    public UserCart(@Email(message = "user email should be a valid email") String userEmail, @NotNull String dishName, @NotNull int dishQuantity, @NotNull Double dishPrice, @NotNull String restaurantId) {
        this.userEmail = userEmail;
        this.dishName = dishName;
        this.dishQuantity = dishQuantity;
        this.dishPrice = dishPrice;
        this.restaurantId = restaurantId;
    }

    public UserCart(@NotNull String dishName, @NotNull int dishQuantity, @NotNull Double dishPrice, @NotNull String restaurantId, String dishPhotoUrl) {
        this.dishName = dishName;
        this.dishQuantity = dishQuantity;
        this.dishPrice = dishPrice;
        this.restaurantId = restaurantId;
        this.dishPhotoUrl = dishPhotoUrl;
    }

    @Override
    public String toString() {
        return "UserCart{" +
                "userEmail='" + userEmail + '\'' +
                ", dishName='" + dishName + '\'' +
                ", dishQuantity=" + dishQuantity +
                ", dishPrice=" + dishPrice +
                ", restaurantId='" + restaurantId + '\'' +
                '}';
    }

    public Double getDishPrice() {
        return dishPrice;
    }

    public void setDishPrice(Double dishPrice) {
        this.dishPrice = dishPrice;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getDishName() {
        return dishName;
    }

    public void setDishName(String dishName) {
        this.dishName = dishName;
    }

    public int getDishQuantity() {
        return dishQuantity;
    }

    public void setDishQuantity(int dishQuantity) {
        this.dishQuantity = dishQuantity;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getDishPhotoUrl() {
        return dishPhotoUrl;
    }

    public void setDishPhotoUrl(String dishPhotoUrl) {
        this.dishPhotoUrl = dishPhotoUrl;
    }
}
