package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

@Entity
@Document(collection = "delivery_agent_temporary_password")
public class DeliveryAgentTemporaryPassword {

    @Id
    @Column(name = "da_email", nullable = false)
    @Email(message = "delivery agent email should be a valid email")
    private String deliveryAgentEmail;

    @Column(name = "da_temp_password", nullable = false)
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
