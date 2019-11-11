package com.app.yumdrop.Entity;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="restaurant_main")
public class SearchRestaurantName {

    @Id
    @GeneratedValue
    @Column(name="restaurant_id")
    private String id;

    @Column(name = "restaurant_name")
    public String restaurantName;

    @Column(name="primary_email_id")
    private String primaryEmailId;

    @Column(name="secondary_email_id")
    private String secondaryEmailId;

    @Column(name="primary_phonenum")
    private String primaryPhonenum;

    @Column(name="secondary_phonenum")
    private String secondaryPhonenum;

    @Column(name="restaurant_area")
    private String restaurantArea;

    @Column(name="restaurant_city")
    private String restaurantCity;

    @Column(name="restaurant_address")
    private String restaurantAddress;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantEmail) {
        this.restaurantName = restaurantEmail;
    }

    public String getPrimaryEmailId() {
        return primaryEmailId;
    }

    public void setPrimaryEmailId(String primaryEmailId) {
        this.primaryEmailId = primaryEmailId;
    }

    public String getSecondaryEmailId() {
        return secondaryEmailId;
    }

    public void setSecondaryEmailId(String secondaryEmailId) {
        this.secondaryEmailId = secondaryEmailId;
    }

    public String getPrimaryPhonenum() {
        return primaryPhonenum;
    }

    public void setPrimaryPhonenum(String primaryPhonenum) {
        this.primaryPhonenum = primaryPhonenum;
    }

    public String getSecondaryPhonenum() {
        return secondaryPhonenum;
    }

    public void setSecondaryPhonenum(String secondaryPhonenum) {
        this.secondaryPhonenum = secondaryPhonenum;
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
