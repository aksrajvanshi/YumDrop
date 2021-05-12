package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;


@Document("deliveryAgent")
public class DeliveryAgent extends CreateAndUpdateTimeModel{

    @Id
    public String deliveryAgentEmail;

    private String deliveryAgentName;

    private String deliveryAgentPhoneNumber;

    private String deliveryAgentPassword;

    private String lastUpdatedUser;

    private String lastCreatedUser;

    private String deliveryAgentAddress;

    public DeliveryAgent(){
    }

    public DeliveryAgent(String deliveryAgentEmail, String deliveryAgentName, String deliveryAgentPhoneNumber, String deliveryAgentPassword, String lastUpdatedUser, String lastCreatedUser, String deliveryAgentAddress) {
        this.deliveryAgentEmail = deliveryAgentEmail;
        this.deliveryAgentName = deliveryAgentName;
        this.deliveryAgentPhoneNumber = deliveryAgentPhoneNumber;
        this.deliveryAgentPassword = deliveryAgentPassword;
        this.lastUpdatedUser = lastUpdatedUser;
        this.lastCreatedUser = lastCreatedUser;
        this.deliveryAgentAddress = deliveryAgentAddress;
    }

    @Override
    public String toString() {
        return "Delivery_Agent{" +
                "deliveryAgentEmail='" + deliveryAgentEmail + '\'' +
                ", deliveryAgentName='" + deliveryAgentName + '\'' +
                ", deliveryAgentPhoneNumber='" + deliveryAgentPhoneNumber + '\'' +
                ", deliveryAgentPassword='" + deliveryAgentPassword + '\'' +
                ", lastUpdatedUser='" + lastUpdatedUser + '\'' +
                ", lastCreatedUser='" + lastCreatedUser + '\'' +
                ", deliveryAgentAddress='" + deliveryAgentAddress + '\'' +
                '}';
    }

    public String getDeliveryAgentEmail() {
        return deliveryAgentEmail;
    }

    public void setDeliveryAgentEmail(String deliveryAgentEmail) {
        this.deliveryAgentEmail = deliveryAgentEmail;
    }

    public String getDeliveryAgentName() {
        return deliveryAgentName;
    }

    public void setDeliveryAgentName(String deliveryAgentName) {
        this.deliveryAgentName = deliveryAgentName;
    }

    public String getDeliveryAgentPhoneNumber() {
        return deliveryAgentPhoneNumber;
    }

    public void setDeliveryAgentPhoneNumber(String deliveryAgentPhoneNumber) {
        this.deliveryAgentPhoneNumber = deliveryAgentPhoneNumber;
    }


    public String getDeliveryAgentPassword() {
        return deliveryAgentPassword;
    }

    public void setDeliveryAgentPassword(String deliveryAgentPassword) {
        this.deliveryAgentPassword = deliveryAgentPassword;
    }

    public String getLastUpdatedUser() {
        return lastUpdatedUser;
    }

    public void setLastUpdatedUser(String lastUpdatedUser) {
        this.lastUpdatedUser = lastUpdatedUser;
    }

    public String getLastCreatedUser() {
        return lastCreatedUser;
    }

    public void setLastCreatedUser(String lastCreatedUser) {
        this.lastCreatedUser = lastCreatedUser;
    }

    public String getDeliveryAgentAddress() {
        return deliveryAgentAddress;
    }

    public void setDeliveryAgentAddress(String deliveryAgentAddress) {
        this.deliveryAgentAddress = deliveryAgentAddress;
    }
}

