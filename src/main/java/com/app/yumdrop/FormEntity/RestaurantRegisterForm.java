package com.app.yumdrop.FormEntity;

public class RestaurantRegisterForm {

    public String restaurantId;
    private String restaurantName;
    private String restaurantPrimaryEmailId;
    private String restaurantPrimaryPassword;
    private String primaryPhoneNumber;
    private String restaurantOtp;
    private String restaurantArea;
    private String restaurantCity;
    private String restaurantAddress;

    public RestaurantRegisterForm(){

    }

    @Override
    public String toString() {
        return "RestaurantRegisterForm{" +
                "restaurantId='" + restaurantId + '\'' +
                ", restaurantName='" + restaurantName + '\'' +
                ", restaurantPrimaryEmailId='" + restaurantPrimaryEmailId + '\'' +
                ", restaurantPrimaryPassword='" + restaurantPrimaryPassword + '\'' +
                ", primaryPhoneNumber='" + primaryPhoneNumber + '\'' +
                ", restaurantOtp='" + restaurantOtp + '\'' +
                ", restaurantArea='" + restaurantArea + '\'' +
                ", restaurantCity='" + restaurantCity + '\'' +
                ", restaurantAddress='" + restaurantAddress + '\'' +
                '}';
    }

    public RestaurantRegisterForm(String restaurantId, String restaurantName, String restaurantPrimaryEmailId, String primaryPhoneNumber, String secondaryPhoneNumber) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.restaurantPrimaryEmailId = restaurantPrimaryEmailId;
        this.primaryPhoneNumber = primaryPhoneNumber;
    }

    public RestaurantRegisterForm(String restaurantId, String restaurantName, String restaurantPrimaryEmailId, String restaurantPrimaryPassword, String primaryPhoneNumber, String restaurantOtp) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.restaurantPrimaryEmailId = restaurantPrimaryEmailId;
        this.restaurantPrimaryPassword = restaurantPrimaryPassword;
        this.primaryPhoneNumber = primaryPhoneNumber;
        this.restaurantOtp = restaurantOtp;
    }

    public RestaurantRegisterForm(String restaurantId, String restaurantName, String restaurantPrimaryEmailId, String primaryPhoneNumber, String restaurantOtp, String restaurantArea, String restaurantCity, String restaurantAddress) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.restaurantPrimaryEmailId = restaurantPrimaryEmailId;
        this.primaryPhoneNumber = primaryPhoneNumber;
        this.restaurantOtp = restaurantOtp;
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

    public String getRestaurantPrimaryPassword() {
        return restaurantPrimaryPassword;
    }

    public void setRestaurantPrimaryPassword(String restaurantPrimaryPassword) {
        this.restaurantPrimaryPassword = restaurantPrimaryPassword;
    }

    public String getPrimaryPhoneNumber() {
        return primaryPhoneNumber;
    }

    public void setPrimaryPhoneNumber(String primaryPhoneNumber) {
        this.primaryPhoneNumber = primaryPhoneNumber;
    }

    public String getRestaurantOtp() {
        return restaurantOtp;
    }

    public void setRestaurantOtp(String restaurantOtp) {
        this.restaurantOtp = restaurantOtp;
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
