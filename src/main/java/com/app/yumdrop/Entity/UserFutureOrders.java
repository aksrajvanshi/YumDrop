package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "future_user_orders")
public class UserFutureOrders extends CreateAndUpdateTimeModel{

    @Id
    @Column(name = "user_email", nullable = false)
    @Email(message = "user email should be a valid email")
    public String userEmail;

    @NotNull
    @Column(name = "order_id", nullable = false)
    private String orderId;

    @NotNull
    @Column(name = "future_order_1_time", nullable = false)
    private String futureOrder1Time;


    @NotNull
    @Column(name = "restaurant_1_id", nullable = false)
    private String restaurant1Id;

    @NotNull
    @Column(name = "order_1_contents", nullable = false)
    private String order1Contents;


    public UserFutureOrders(){
    }

    public UserFutureOrders(@Email(message = "user email should be a valid email") String userEmail, @NotNull String orderId, @NotNull String futureOrder1Time, @NotNull String restaurant1Id, String order1Contents) {
        this.userEmail = userEmail;
        this.orderId = orderId;
        this.futureOrder1Time = futureOrder1Time;
        this.restaurant1Id = restaurant1Id;
        this.order1Contents = order1Contents;
    }

    @Override
    public String toString() {
        return "Delivery_Agent{" +
                "orderId='" + orderId + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", futureOrder1Time='" + futureOrder1Time + '\'' +
                ", restaurant1Id='" + restaurant1Id + '\'' +
                ", order1Contents='" + order1Contents + '\'' +
                '}';
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getFutureOrder1Time() {
        return futureOrder1Time;
    }

    public void setFutureOrder1Time(String futureOrder1Time) {
        this.futureOrder1Time = futureOrder1Time;
    }

    public String getRestaurant1Id() {
        return restaurant1Id;
    }

    public void setRestaurant1Id(String restaurant1Id) {
        this.restaurant1Id = restaurant1Id;
    }

    public String getOrder1Contents() {
        return order1Contents;
    }

    public void setOrder1Contents(String order1Contents) {
        this.order1Contents = order1Contents;
    }

}

