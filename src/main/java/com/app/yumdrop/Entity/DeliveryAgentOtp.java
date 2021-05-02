package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Document(collection = "delivery_agent_otp")
public class DeliveryAgentOtp extends CreateAndUpdateTimeModel {

    @Id
    @Column(name = "da_email", nullable = false)
    @Email(message = "Delivery agent email should be a valid email")
    public String deliveryAgentEmail;

    @NotNull
    @Column(name = "da_otp", nullable = false)
    public String deliveryAgentOtp;

    public DeliveryAgentOtp() {
    }

    public DeliveryAgentOtp(@Email(message = "Delivery agent email should be a valid email") String deliveryAgentEmail, @NotNull String deliveryAgentOtp) {
        this.deliveryAgentEmail = deliveryAgentEmail;
        this.deliveryAgentOtp = deliveryAgentOtp;
    }

    @Override
    public String toString() {
        return "Delivery_Agent_Otp{" +
                "deliveryAgentEmail='" + deliveryAgentEmail + '\'' +
                ", deliveryAgentOtp='" + deliveryAgentOtp + '\'' +
                '}';
    }

    public String getDeliveryAgentEmail() {
        return deliveryAgentEmail;
    }

    public void setDeliveryAgentEmail(String deliveryAgentEmail) {
        this.deliveryAgentEmail = deliveryAgentEmail;
    }

    public String getDeliveryAgentOtp() {
        return deliveryAgentOtp;
    }

    public void setDeliveryAgentOtp(String deliveryAgentOtp) {
        this.deliveryAgentOtp = deliveryAgentOtp;
    }
}
