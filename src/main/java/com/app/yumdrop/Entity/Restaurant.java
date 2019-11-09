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
    @Column(name = "secondary_email_id", nullable = false)
    private String restaurantSecondaryEmailID;

    @NotNull
    @Column(name = "primary_phonenum", nullable = false)
    private String primaryPhoneNumber;

    @NotNull
    @Column(name = "secondary_phonenum", nullable = false)
    private String secondaryPhoneNumber;

    @Column(name = "restaurant_area", nullable = false)
    private String restaurantArea;

    @Column(name = "restaurant_city", nullable = false)
    private String restaurantCity;

    @Column(name = "restaurant_address", nullable = false)
    private String restaurantAddress;

    public Restaurant() {
    }

    public Restaurant(String restaurantId, @NotNull String restaurantName, @NotNull String restaurantPrimaryEmailId, @NotNull String restaurantSecondaryEmailID, @NotNull String primaryPhoneNumber, @NotNull String secondaryPhoneNumber) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.restaurantPrimaryEmailId = restaurantPrimaryEmailId;
        this.restaurantSecondaryEmailID = restaurantSecondaryEmailID;
        this.primaryPhoneNumber = primaryPhoneNumber;
        this.secondaryPhoneNumber = secondaryPhoneNumber;
    }

    public Restaurant(String restaurantId, @NotNull String restaurantName, @NotNull String restaurantPrimaryEmailId, @NotNull String restaurantSecondaryEmailID, @NotNull String primaryPhoneNumber, @NotNull String secondaryPhoneNumber, String restaurantArea, String restaurantCity, String restaurantAddress) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.restaurantPrimaryEmailId = restaurantPrimaryEmailId;
        this.restaurantSecondaryEmailID = restaurantSecondaryEmailID;
        this.primaryPhoneNumber = primaryPhoneNumber;
        this.secondaryPhoneNumber = secondaryPhoneNumber;
        this.restaurantArea = restaurantArea;
        this.restaurantCity = restaurantCity;
        this.restaurantAddress = restaurantAddress;
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

    public String getRestaurantSecondaryEmailID() {
        return restaurantSecondaryEmailID;
    }

    public void setRestaurantSecondaryEmailID(String restaurantSecondaryEmailID) {
        this.restaurantSecondaryEmailID = restaurantSecondaryEmailID;
    }

    public String getPrimaryPhoneNumber() {
        return primaryPhoneNumber;
    }

    public void setPrimaryPhoneNumber(String primaryPhoneNumber) {
        this.primaryPhoneNumber = primaryPhoneNumber;
    }

    public String getSecondaryPhoneNumber() {
        return secondaryPhoneNumber;
    }

    public void setSecondaryPhoneNumber(String secondaryPhoneNumber) {
        this.secondaryPhoneNumber = secondaryPhoneNumber;
    }

    public String getRestaurantArea() {
        return restaurantArea;
    }

    public void setRestaurantArea(String restaurantArea) {
        this.restaurantArea = restaurantArea;
    }

    public String getRestaurantCity() {
        return restaurantCity;
    }

    public void setRestaurantCity(String restaurantCity) {
        this.restaurantCity = restaurantCity;
    }

    public String getRestaurantAddress() {
        return restaurantAddress;
    }

    public void setRestaurantAddress(String restaurantAddress) {
        this.restaurantAddress = restaurantAddress;
    }
}
