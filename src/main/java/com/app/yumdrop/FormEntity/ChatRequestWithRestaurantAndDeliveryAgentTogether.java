package com.app.yumdrop.FormEntity;

import javax.validation.constraints.NotNull;

public class ChatRequestWithRestaurantAndDeliveryAgentTogether{

    @NotNull
    private String userEmail;

    private String restaurantId;

    private String deliveryAgentEmailId;

    public ChatRequestWithRestaurantAndDeliveryAgentTogether(@NotNull String userEmail, String restaurantId, String deliveryAgentEmailId) {
        this.userEmail = userEmail;
        this.restaurantId = restaurantId;
        this.deliveryAgentEmailId = deliveryAgentEmailId;
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

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
}
