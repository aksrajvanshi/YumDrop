package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.springframework.data.mongodb.core.mapping.Document;

@Entity
@Document("userAddress")
public class UsersAddress {

    @Id
    @NotNull
    @Column(name = "user_email", nullable = false)
    private String userEmail;

    @NotNull
    @Column(name = "user_address", nullable = false)
    private String userAddress;

    public UsersAddress() {
    }

    public UsersAddress(@NotNull String userEmail, @NotNull String userAddress) {
        this.userEmail = userEmail;
        this.userAddress = userAddress;
    }

    @Override
    public String toString() {
        return "UsersAddress{" + "userEmail='" + userEmail + '\'' + ", userAddress='" + userAddress + '\'' + '}';
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }
}
