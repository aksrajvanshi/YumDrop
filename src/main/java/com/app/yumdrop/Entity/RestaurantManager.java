package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "restaurant_manager")
public class RestaurantManager extends CreateAndUpdateTimeModel {

    @Id
    @NotNull
    @Column(name = "restaurant_id", nullable = false)
    private String restaurantId;

    @NotNull
    @Column(name = "restaurant_manager_email", nullable = false)
    private String restaurantManagerEmailId;

    @NotNull
    @Column(name = "password", nullable = false)
    private String restaurantManagerPassword;

    public RestaurantManager() {
    }

    public RestaurantManager(@NotNull String restaurantId, @NotNull String restaurantManagerEmailId, @NotNull String restaurantManagerPassword) {
        this.restaurantId = restaurantId;
        this.restaurantManagerEmailId = restaurantManagerEmailId;
        this.restaurantManagerPassword = restaurantManagerPassword;
    }

    @Override
    public String toString() {
        return "RestaurantManager{" +
                "restaurantId='" + restaurantId + '\'' +
                ", restaurantManagerEmailId='" + restaurantManagerEmailId + '\'' +
                ", restaurantManagerPassword='" + restaurantManagerPassword + '\'' +
                '}';
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
}
