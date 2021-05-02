package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Document(collection = "restaurant_manager")
@IdClass(RestaurantManagerId.class)
public class RestaurantManager extends CreateAndUpdateTimeModel {

    @Id
    @NotNull
    @Column(name = "restaurant_id", nullable = false)
    private String restaurantId;

    @Id
    @NotNull
    @Column(name = "restaurant_manager_email", nullable = false)
    private String restaurantManagerEmailId;

    @NotNull
    @Column(name = "password", nullable = false)
    private String restaurantManagerPassword;

    @NotNull
    @Column(name = "manager_first_login", nullable = false)
    private boolean managerFirstLogin;

    public RestaurantManager() {
    }

    public RestaurantManager(@NotNull String restaurantId, @NotNull String restaurantManagerEmailId, @NotNull String restaurantManagerPassword, @NotNull boolean managerFirstLogin) {
        this.restaurantId = restaurantId;
        this.restaurantManagerEmailId = restaurantManagerEmailId;
        this.restaurantManagerPassword = restaurantManagerPassword;
        this.managerFirstLogin = managerFirstLogin;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getRestaurantManagerEmailId() {
        return restaurantManagerEmailId;
    }

    public void setRestaurantManagerEmailId(String restaurantManagerEmailId) {
        this.restaurantManagerEmailId = restaurantManagerEmailId;
    }

    public String getRestaurantManagerPassword() {
        return restaurantManagerPassword;
    }

    public void setRestaurantManagerPassword(String restaurantManagerPassword) {
        this.restaurantManagerPassword = restaurantManagerPassword;
    }

    public boolean isManagerFirstLogin() {
        return managerFirstLogin;
    }

    public void setManagerFirstLogin(boolean managerFirstLogin) {
        this.managerFirstLogin = managerFirstLogin;
    }
}
