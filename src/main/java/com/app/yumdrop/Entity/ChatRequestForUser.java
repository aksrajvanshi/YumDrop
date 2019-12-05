package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "chat_request_for_user")
public class ChatRequestForUser {

    @Id
    @Column(name = "user_email", nullable = false)
    @NotNull
    @Email(message = "user email should be a valid email")
    private String userEmail;

    @Column(name = "restaurant_id", nullable = false)
    private String restaurantId;

    @Column(name = "delivery_agent_email", nullable = false)
    private String deliveryAgentEmailId;

    public ChatRequestForUser(@Email(message = "user email should be a valid email") String userEmail, String restaurantId, String deliveryAgentEmailId) {
        this.userEmail = userEmail;
        this.restaurantId = restaurantId;
        this.deliveryAgentEmailId = deliveryAgentEmailId;
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

    public String getDeliveryAgentEmailId() {
        return deliveryAgentEmailId;
    }

    public void setDeliveryAgentEmailId(String deliveryAgentEmailId) {
        this.deliveryAgentEmailId = deliveryAgentEmailId;
    }
}
