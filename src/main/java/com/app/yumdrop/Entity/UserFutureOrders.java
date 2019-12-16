package com.app.yumdrop.Entity;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Entity
@Table(name = "future_user_orders")
@IdClass(UserOrderId.class)
public class UserFutureOrders extends CreateAndUpdateTimeModel {

    @Id
    @Column(name = "order_id")
    private Long orderId;

    @Id
    @Column(name = "user_email", nullable = false)
    @Email(message = "user email should be a valid email")
    private String userEmail;

    @NotNull
    @Column(name = "restaurant_id", nullable = false)
    private String restaurantId;

    @NotNull
    @Column(name = "future_order_time", nullable = false)
    private Timestamp futureOrderTime;

    @NotNull
    @Column(name = "order_contents", nullable = false)
    private String orderContents;

    @Column(name = "order_price")
    private double orderPrice;

    public UserFutureOrders() {
    }

    public UserFutureOrders(@Email(message = "user email should be a valid email") String userEmail, @NotNull Timestamp futureOrderTime, @NotNull String restaurant1Id, String orderContents, double orderPrice) {
        this.userEmail = userEmail;
        this.futureOrderTime = futureOrderTime;
        this.restaurantId = restaurant1Id;
        this.orderContents = orderContents;
        this.orderPrice = orderPrice;
    }

    public UserFutureOrders(@Email(message = "user email should be a valid email") String userEmail, @NotNull Long orderId, @NotNull Timestamp futureOrderTime, @NotNull String restaurantId, String orderContents, double orderPrice) {
        this.orderId = orderId;
        this.userEmail = userEmail;
        this.futureOrderTime = futureOrderTime;
        this.restaurantId = restaurantId;
        this.orderContents = orderContents;
        this.orderPrice = orderPrice;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public Timestamp getFutureOrderTime() {
        return futureOrderTime;
    }

    public void setFutureOrderTime(Timestamp futureOrderTime) {
        this.futureOrderTime = futureOrderTime;
    }

    public String getOrderContents() {
        return orderContents;
    }

    public void setOrderContents(String orderContents) {
        this.orderContents = orderContents;
    }

    public double getOrderPrice() {
        return orderPrice;
    }

    public void setOrderPrice(double orderPrice) {
        this.orderPrice = orderPrice;
    }
}
