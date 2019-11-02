package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "restaurant_manager_otp")
public class RestaurantOtp extends CreateAndUpdateTimeModel {


        @Id
        @Column(name = "restaurant_primary_email", nullable = false)
        @Email(message = "Restaurant primary email should be a valid email")
        private String restaurantPrimaryEmail;

        @NotNull
        @Column(name = "restaurant_id", nullable = false)
        private String restaurantID;

        @NotNull
        @Column(name="restaurant_otp", nullable = false)
        private String restaurantOtp;

    public RestaurantOtp(@Email(message = "Restaurant primary email should be a valid email") String restaurantPrimaryEmail, @NotNull String restaurantID, @NotNull String restaurantOtp) {
        this.restaurantPrimaryEmail = restaurantPrimaryEmail;
        this.restaurantID = restaurantID;
        this.restaurantOtp = restaurantOtp;
    }

    public String getRestaurantPrimaryEmail() {
        return restaurantPrimaryEmail;
    }

    public void setRestaurantPrimaryEmail(String restaurantPrimaryEmail) {
        this.restaurantPrimaryEmail = restaurantPrimaryEmail;
    }

    public String getRestaurantID() {
        return restaurantID;
    }

    public void setRestaurantID(String restaurantID) {
        this.restaurantID = restaurantID;
    }

    public String getRestaurantOtp() {
        return restaurantOtp;
    }

    public void setRestaurantOtp(String restaurantOtp) {
        this.restaurantOtp = restaurantOtp;
    }

    @Override
    public String toString() {
        return "RestaurantOtp{" +
                "restaurantPrimaryEmail='" + restaurantPrimaryEmail + '\'' +
                ", restaurantID='" + restaurantID + '\'' +
                ", restaurantOtp='" + restaurantOtp + '\'' +
                '}';
    }
}
