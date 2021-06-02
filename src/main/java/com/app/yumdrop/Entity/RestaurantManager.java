package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import javax.persistence.IdClass;

@Document("restaurantManager")
@IdClass(RestaurantManagerId.class)
public class RestaurantManager extends CreateAndUpdateTimeModel {

    @Id
    private String restaurantId;

    @Id
    private String restaurantManagerEmailId;

    private String restaurantManagerPassword;

    private boolean managerFirstLogin;

    public RestaurantManager() {
    }

    public RestaurantManager(String restaurantId, String restaurantManagerEmailId, String restaurantManagerPassword,
            boolean managerFirstLogin) {
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
