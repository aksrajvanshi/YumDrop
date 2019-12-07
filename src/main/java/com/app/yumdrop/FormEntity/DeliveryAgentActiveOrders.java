package com.app.yumdrop.FormEntity;

import javax.persistence.Id;

public class DeliveryAgentActiveOrders {

    Long orderId;

    String restaurantName;

    String userEmail;

    String userName;

    @Id
    String restaurantAddress;
    String userAddress;

    public DeliveryAgentActiveOrders(Long orderId, String restaurantName, String userEmail, String userName, String restaurantAddress, String userAddress) {
        this.orderId = orderId;
        this.restaurantName = restaurantName;
        this.userEmail = userEmail;
        this.userName = userName;
        this.restaurantAddress = restaurantAddress;
        this.userAddress = userAddress;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getRestaurantAddress() {
        return restaurantAddress;
    }

    public void setRestaurantAddress(String restaurantAddress) {
        this.restaurantAddress = restaurantAddress;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }
}
