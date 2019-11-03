package com.app.yumdrop.FormEntity;

public class DeliveryAgentLoginDetails {

    public String deliveryAgentEmail;
    public String deliveryAgentPassword;

    public DeliveryAgentLoginDetails() {
    }

    public DeliveryAgentLoginDetails(String deliveryAgentEmail, String deliveryAgentPassword) {

        this.deliveryAgentEmail = deliveryAgentEmail;
        this.deliveryAgentPassword = deliveryAgentPassword;
    }

    @Override
    public String toString() {
        return "DeliveryAgentLoginDetails{" +
                "deliveryAgentEmail='" + deliveryAgentEmail + '\'' +
                ", deliveryAgentPassword='" + deliveryAgentPassword + '\'' +
                '}';
    }

    public String getdeliveryAgentLoginEmail() {
        return deliveryAgentEmail;
    }

    public void setdeliveryAgentLoginEmail(String deliveryAgentEmail) {
        this.deliveryAgentEmail = deliveryAgentEmail;
    }

    public String getdeliveryAgentLoginPassword() {
        return deliveryAgentPassword;
    }

    public void setdeliveryAgentLoginPassword(String deliveryAgentPassword) {
        this.deliveryAgentPassword = deliveryAgentPassword;
    }
}
