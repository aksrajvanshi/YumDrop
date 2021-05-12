package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document(collection = "deliveryAgentTemporaryPassword")
public class DeliveryAgentTemporaryPassword {

    @Id
    private String deliveryAgentEmail;

    private String temporaryPassword;

    public DeliveryAgentTemporaryPassword() {
    }

    public DeliveryAgentTemporaryPassword(String deliveryAgentEmail, String temporaryPassword) {
        this.deliveryAgentEmail = deliveryAgentEmail;
        this.temporaryPassword = temporaryPassword;
    }

    @Override
    public String toString() {
        return "Delivery_Agent_Temporary_Password{" +
                "deliveryAgentEmail='" + deliveryAgentEmail + '\'' +
                ", temporaryPassword='" + temporaryPassword + '\'' +
                '}';
    }

    public String getDeliveryAgentEmail() {
        return deliveryAgentEmail;
    }

    public void setDeliveryAgentEmail(String deliveryAgentEmail) {
        this.deliveryAgentEmail = deliveryAgentEmail;
    }

    public String getTemporaryPassword() {
        return temporaryPassword;
    }

    public void setTemporaryPassword(String temporaryPassword) {
        this.temporaryPassword = temporaryPassword;
    }
}
