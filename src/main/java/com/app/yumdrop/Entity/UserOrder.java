package com.app.yumdrop.Entity;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user_order_table")
@IdClass(UserOrderId.class)
public class UserOrder extends CreateAndUpdateTimeModel {

    @Id
    @Column(name = "order_id")
    private Long orderId;

    @Id
    @Column(name = "user_email", nullable = false)
    @Email(message = "user email should be a valid email")
    private String userEmail;

    @Id
    @NotNull
    @Column(name = "restaurant_id", nullable = false)
    private String restaurantId;

    @Column(name = "order_status", nullable = false)
    private int orderStatus;

    @Column(name = "order_contents", nullable = false)
    private String orderContents;

    @Column(name = "order_price", nullable = false)
    private Double orderPrice;

    public UserOrder() {
    }

    public UserOrder(@Email(message = "user email should be a valid email") String userEmail) {
        this.userEmail = userEmail;
    }

    public UserOrder(Long orderId, @Email(message = "user email should be a valid email") String userEmail, @NotNull String restaurantId, String orderContents) {
        this.orderId = orderId;
        this.userEmail = userEmail;
        this.restaurantId = restaurantId;
        this.orderContents = orderContents;
    }

    public UserOrder(Long orderId, @Email(message = "user email should be a valid email") String userEmail, @NotNull String restaurantId, int orderStatus, String orderContents) {
        this.orderId = orderId;
        this.userEmail = userEmail;
        this.restaurantId = restaurantId;
        this.orderStatus = orderStatus;
        this.orderContents = orderContents;
    }

    public UserOrder(UserOrderId userOrderId, int orderStatus, String orderContents, Long orderId) {
        this.orderId = orderId;
        this.userEmail = userOrderId.getUserEmail();
        this.restaurantId = userOrderId.getRestaurantId();
        this.orderStatus = orderStatus;
        this.orderContents = orderContents;
    }

    public UserOrder(UserOrderId userOrderId, int orderStatus, String orderContents, Long orderId, Double orderPrice) {
        this.orderId = orderId;
        this.userEmail = userOrderId.getUserEmail();
        this.restaurantId = userOrderId.getRestaurantId();
        this.orderStatus = orderStatus;
        this.orderContents = orderContents;
        this.orderPrice = orderPrice;
    }

    public Double getOrderPrice() {
        return orderPrice;
    }

    public void setOrderPrice(Double orderPrice) {
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

    public int getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(int orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getOrderContents() {
        return orderContents;
    }

    public void setOrderContents(String orderContents) {
        this.orderContents = orderContents;
    }
}
