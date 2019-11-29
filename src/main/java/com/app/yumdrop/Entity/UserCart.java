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

    @Id
    @NotNull
    private String dishName;

    private int dishQuantity;

    @Id
    @NotNull
    private String restaurantId;

    public UserCart() {
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

    @Override
    public String toString() {
        return "UserCart{" +
                "userEmail='" + userEmail + '\'' +
                ", dishName='" + dishName + '\'' +
                ", dishQuantity='" + dishQuantity + '\'' +
                ", restaurantId='" + restaurantId + '\'' +
                '}';
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
}
