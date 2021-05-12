package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;


@Document("restaurantManagerOtp")
public class RestaurantOtp extends CreateAndUpdateTimeModel {

    @Id
    private String restaurantId;

    private String restaurantPrimaryEmail;

    private String restaurantOtp;

    public RestaurantOtp() {
    }

    public RestaurantOtp(String restaurantId, String restaurantPrimaryEmail, String restaurantOtp) {
        this.restaurantId = restaurantId;
        this.restaurantPrimaryEmail = restaurantPrimaryEmail;
        this.restaurantOtp = restaurantOtp;
    }

    @Override
    public String toString() {
        return "RestaurantOtp{" +
                "restaurantID='" + restaurantId + '\'' +
                ", restaurantPrimaryEmail='" + restaurantPrimaryEmail + '\'' +
                ", restaurantOtp='" + restaurantOtp + '\'' +
                '}';
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantID) {
        this.restaurantId = restaurantId;
    }

    public String getRestaurantPrimaryEmail() {
        return restaurantPrimaryEmail;
    }

    public void setRestaurantPrimaryEmail(String restaurantPrimaryEmail) {
        this.restaurantPrimaryEmail = restaurantPrimaryEmail;
    }

    public String getRestaurantOtp() {
        return restaurantOtp;
    }

    public void setRestaurantOtp(String restaurantOtp) {
        this.restaurantOtp = restaurantOtp;
    }
}
