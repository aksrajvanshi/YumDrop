package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document(collection = "deliveryAgentOtp")
public class DeliveryAgentOtp extends CreateAndUpdateTimeModel {

    @Id
    public String deliveryAgentEmail;

    public String deliveryAgentOtp;

    public DeliveryAgentOtp() {
    }

    public DeliveryAgentOtp(String deliveryAgentEmail, String deliveryAgentOtp) {
        this.deliveryAgentEmail = deliveryAgentEmail;
        this.deliveryAgentOtp = deliveryAgentOtp;
    }

    @Override
    public String toString() {
        return "Delivery_Agent_Otp{" + "deliveryAgentEmail='" + deliveryAgentEmail + '\'' + ", deliveryAgentOtp='"
                + deliveryAgentOtp + '\'' + '}';
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
