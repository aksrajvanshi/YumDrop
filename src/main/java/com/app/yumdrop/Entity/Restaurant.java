package com.app.yumdrop.Entity;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;



@Entity
@Table(name = "restaurant_main")
public class Restaurant extends CreateAndUpdateTimeModel {


    @Id
    @Column(name = "restaurant_id", nullable = false)
    public String restaurantId;

    @NotNull
    @Column(name = "restaurant_name", nullable = false)
    private String restaurantName;

    @NotNull
    @Column(name = "primary_email_id", nullable = false)
    private String restaurantPrimaryEmailId;

    @NotNull
    @Column(name = "primary_phonenum", nullable = false)
    private String primaryPhoneNumber;

    @Column(name = "restaurant_address", nullable = false)
    private String restaurantAddress;

    public Restaurant() {
    }

    public Restaurant(String restaurantId, @NotNull String restaurantName, @NotNull String restaurantPrimaryEmailId, @NotNull String primaryPhoneNumber) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.restaurantPrimaryEmailId = restaurantPrimaryEmailId;
        this.primaryPhoneNumber = primaryPhoneNumber;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getRestaurantPrimaryEmailId() {
        return restaurantPrimaryEmailId;
    }

    public void setRestaurantPrimaryEmailId(String restaurantPrimaryEmailId) {
        this.restaurantPrimaryEmailId = restaurantPrimaryEmailId;
    }

    public String getPrimaryPhoneNumber() {
        return primaryPhoneNumber;
    }

    public void setPrimaryPhoneNumber(String primaryPhoneNumber) {
        this.primaryPhoneNumber = primaryPhoneNumber;
    }

    public String getRestaurantAddress() {
        return restaurantAddress;
    }

    public void setRestaurantAddress(String restaurantAddress) {
        this.restaurantAddress = restaurantAddress;
    }

    @Override
    public String toString() {
        return "Restaurant{" +
                "restaurantId='" + restaurantId + '\'' +
                ", restaurantName='" + restaurantName + '\'' +
                ", restaurantPrimaryEmailId='" + restaurantPrimaryEmailId + '\'' +
                ", primaryPhoneNumber='" + primaryPhoneNumber + '\'' +
                ", restaurantAddress='" + restaurantAddress + '\'' +
                '}';
    }
}
