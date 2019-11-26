package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "delivery_agent")
public class DeliveryAgent extends CreateAndUpdateTimeModel{

    @Id
    @Column(name = "da_email", nullable = false)
    @Email(message = "delivery agent email should be a valid email")
    public String deliveryAgentEmail;

    @NotNull
    @Column(name = "da_name", nullable = false)
    private String deliveryAgentName;

    @NotNull
    @Column(name = "da_phonenum", nullable = false)
    private String deliveryAgentPhoneNumber;


    @NotNull
    @Column(name = "da_password", nullable = false)
    private String deliveryAgentPassword;

    @NotNull
    @Column(name = "last_updated_user", nullable = false)
    private String lastUpdatedUser;

    @NotNull
    @Column(name = "last_created_user", nullable = false)
    private String lastCreatedUser;

    @Column(name = "da_address", nullable = false)
    private String deliveryAgentAddress;

    public DeliveryAgent(){
    }

    public DeliveryAgent(@Email(message = "delivery agent email should be a valid email") String deliveryAgentEmail, @NotNull String deliveryAgentPassword) {
        this.deliveryAgentEmail = deliveryAgentEmail;
        this.deliveryAgentPassword = deliveryAgentPassword;
    }

    public DeliveryAgent(@Email(message = "delivery agent email should be a valid email") String deliveryAgentEmail, @NotNull String deliveryAgentName, @NotNull String deliveryAgentPhoneNumber, @NotNull String deliveryAgentPassword, String deliveryAgentAddress, @NotNull String lastUpdatedUser, @NotNull String lastCreatedUser) {
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

