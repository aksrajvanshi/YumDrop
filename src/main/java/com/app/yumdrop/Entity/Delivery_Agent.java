package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "delivery_agent")
public class Delivery_Agent extends CreateAndUpdateTimeModel{

    @Id
    @Column(name = "da_email", nullable = false)
    @Email(message = "delivery agent email should be a valid email")
    public String daEmail;

    @NotNull
    @Column(name = "da_name", nullable = false)
    private String daName;

    @NotNull
    @Column(name = "da_phonenum", nullable = false)
    private String daPhoneNumber;


    @NotNull
    @Column(name = "da_password", nullable = false)
    private String daPassword;

    @NotNull
    @Column(name = "last_updated_user", nullable = false)
    private String lastUpdatedUser;

    @NotNull
    @Column(name = "last_created_user", nullable = false)
    private String lastCreatedUser;

    @Column(name = "da_address", nullable = false)
    private String daAddress;

    public Delivery_Agent(){
    }

    public Delivery_Agent(@Email(message = "delivery agent email should be a valid email") String daEmail, @NotNull String daName, @NotNull String daPhoneNumber, @NotNull String daPassword, String daAddress, @NotNull String lastUpdatedUser, @NotNull String lastCreatedUser) {
        this.daEmail = daEmail;
        this.daName = daName;
        this.daPhoneNumber = daPhoneNumber;
        this.daPassword = daPassword;
        this.lastUpdatedUser = lastUpdatedUser;
        this.lastCreatedUser = lastCreatedUser;
        this.daAddress = daAddress;
    }

    @Override
    public String toString() {
        return "Delivery_Agent{" +
                "daEmail='" + daEmail + '\'' +
                ", daName='" + daName + '\'' +
                ", daPhoneNumber='" + daPhoneNumber + '\'' +
                ", daPassword='" + daPassword + '\'' +
                ", lastUpdatedUser='" + lastUpdatedUser + '\'' +
                ", lastCreatedUser='" + lastCreatedUser + '\'' +
                ", daAddress='" + daAddress + '\'' +
                '}';
    }

    public String getDAEmail() {
        return daEmail;
    }

    public void setDAEmail(String daEmail) {
        this.daEmail = daEmail;
    }

    public String getDAName() {
        return daName;
    }

    public void setDAName(String daName) {
        this.daName = daName;
    }

    public String getDAPhoneNumber() {
        return daPhoneNumber;
    }

    public void setDAPhoneNumber(String daPhoneNumber) {
        this.daPhoneNumber = daPhoneNumber;
    }


    public String getDAPassword() {
        return daPassword;
    }

    public void setDAPassword(String daPassword) {
        this.daPassword = daPassword;
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

    public String getDAAddress() {
        return daAddress;
    }

    public void setDAAddress(String daAddress) {
        this.daAddress = daAddress;
    }
}

