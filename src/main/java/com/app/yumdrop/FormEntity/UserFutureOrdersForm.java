package com.app.yumdrop.FormEntity;

import java.sql.Timestamp;

public class UserFutureOrdersForm {

    public String orderId;
    public String email;
    public Timestamp time1;
    public String restaurantId;
    public String orderContents;
    public double price;

    public UserFutureOrdersForm() {

    }

    public UserFutureOrdersForm(String orderId, String email, Timestamp time1, String restaurantId, String orderContents, double price) {

        this.orderId = orderId;
        this.email = email;
        this.time1 = time1;
        this.restaurantId = restaurantId;
        this.orderContents = orderContents;
        this.price = price;
    }

    @Override
    public String toString() {
        return "UserFutureOrdersForm{" +
                "orderId='" + orderId + '\'' +
                ", email='" + email + '\'' +
                ", time1='" + time1 + '\'' +
                ", restaurantId='" + restaurantId + '\'' +
                ", orderContents='" + orderContents + '\'' +
                ", price='" + price + '\'' +
                '}';
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Timestamp getTime1() {
        return time1;
    }

    public void setTime1(Timestamp time1) {
        this.time1 = time1;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getOrderContents() {
        return orderContents;
    }

    public void setOrderContents(String orderContents) {
        this.orderContents = orderContents;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

}
