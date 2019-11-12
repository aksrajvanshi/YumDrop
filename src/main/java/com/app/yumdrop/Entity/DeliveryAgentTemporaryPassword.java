package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

@Entity
@Table(name = "delivery_agent_temporary_password")
public class DeliveryAgentTemporaryPassword {

    @Id
    @Column(name = "da_email", nullable = false)
    @Email(message = "delivery agent email should be a valid email")
    private String deliveryAgentEmail;

    @Column(name = "da_temp_password", nullable = false)
    private String deliveryAgentTemporaryPassword;

    public DeliveryAgentTemporaryPassword() {
    }

    public DeliveryAgentTemporaryPassword(String deliveryAgentEmail, String deliveryAgentTemporaryPassword) {
        this.deliveryAgentEmail = deliveryAgentEmail;
        this.deliveryAgentTemporaryPassword = deliveryAgentTemporaryPassword;
    }

    @Override
    public String toString() {
        return "Delivery_Agent_Temporary_Password{" +
                "deliveryAgentEmail='" + deliveryAgentEmail + '\'' +
                ", deliveryAgentTemporaryPassword='" + deliveryAgentTemporaryPassword + '\'' +
                '}';
    }

    public String getDeliveryAgentEmail() {
        return deliveryAgentEmail;
    }

    public void setDeliveryAgentEmail(String deliveryAgentEmail) {
        this.deliveryAgentEmail = deliveryAgentEmail;
    }

    public String getDeliveryAgentTemporaryPassword() {
        return deliveryAgentTemporaryPassword;
    }

    public void setTemporaryPassword(String deliveryAgentTemporaryPassword) {
        this.deliveryAgentTemporaryPassword = deliveryAgentTemporaryPassword;
    }
}
