package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document("restaurantMain")
public class Restaurant extends CreateAndUpdateTimeModel {

    @Id
    public String restaurantId;

    private String restaurantName;

    private String restaurantPrimaryEmailId;

    private String primaryPhoneNumber;

    private String restaurantAddress;

    public Restaurant() {
    }

    public Restaurant(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public Restaurant(String restaurantId, String restaurantAddress) {
        this.restaurantId = restaurantId;
        this.restaurantAddress = restaurantAddress;
    }

    public Restaurant(String restaurantId, String restaurantName, String restaurantPrimaryEmailId, String primaryPhoneNumber) {
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
