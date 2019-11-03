package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
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
        private String secondaryEmailID;

        @NotNull
        @Column(name = "primary_phonenum", nullable = false)
        private String primaryPhoneNumber;

        @NotNull
        @Column(name = "secondary_phone_num", nullable = false)
        private String secondaryPhoneNumber;

        @NotNull
        @Column(name = "restaurant_area", nullable = false)
        private String restaurantArea;

        @Column(name = "restaurant_city", nullable = false)
        private String restaurantCity;

        @Column(name = "restaurant_address", nullable = false)
        private String restaurantAddress;

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

    public String getSecondaryEmailID() {
        return secondaryEmailID;
    }

    public void setSecondaryEmailID(String secondaryEmailID) {
        this.secondaryEmailID = secondaryEmailID;
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

    @Override
    public String toString() {
        return "Restaurant{" +
                "restaurantId='" + restaurantId + '\'' +
                ", restaurantName='" + restaurantName + '\'' +
                ", restaurantPrimaryEmailId='" + restaurantPrimaryEmailId + '\'' +
                ", secondaryEmailID='" + secondaryEmailID + '\'' +
                ", primaryPhoneNumber='" + primaryPhoneNumber + '\'' +
                ", secondaryPhoneNumber='" + secondaryPhoneNumber + '\'' +
                ", restaurantArea='" + restaurantArea + '\'' +
                ", restaurantCity='" + restaurantCity + '\'' +
                ", restaurantAddress='" + restaurantAddress + '\'' +
                '}';
    }


}
