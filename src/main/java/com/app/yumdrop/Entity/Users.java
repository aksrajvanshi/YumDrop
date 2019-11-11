package com.app.yumdrop.Entity;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "users")
public class Users extends CreateAndUpdateTimeModel{

    @Id
    @Column(name = "user_email", nullable = false)
    @Email(message = "user email should be a valid email")
    public String userEmail;

    @NotNull
    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "user_phonenum", nullable = false)
    private String userPhoneNumber;

    @NotNull
    @Column(name = "user_countrycode", nullable = false)
    private String userCountryCode;

    @NotNull
    @Column(name = "user_password", nullable = false)
    private String userPassword;

    @NotNull
    @Column(name = "last_updated_user", nullable = false)
    private String lastUpdatedUser;

    @NotNull
    @Column(name = "last_created_user", nullable = false)
    private String lastCreatedUser;

    @Column(name = "user_address", nullable = false)
    private String userAddress;

    public Users() {
    }

    public Users(@Email(message = "user email should be a valid email") String userEmail, @NotNull String userName, @NotNull String userPassword) {
        this.userEmail = userEmail;
        this.userName = userName;
        this.userPassword = userPassword;
    }

    public Users(@Email(message = "user email should be a valid email") String userEmail, @NotNull String userName, @NotNull String userPassword, @NotNull String lastUpdatedUser, @NotNull String lastCreatedUser) {
        this.userEmail = userEmail;
        this.userName = userName;
        this.userPassword = userPassword;
        this.lastUpdatedUser = lastUpdatedUser;
        this.lastCreatedUser = lastCreatedUser;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPhoneNumber() {
        return userPhoneNumber;
    }

    public void setUserPhoneNumber(String userPhoneNumber) {
        this.userPhoneNumber = userPhoneNumber;
    }

    public String getUserCountryCode() {
        return userCountryCode;
    }

    public void setUserCountryCode(String userCountryCode) {
        this.userCountryCode = userCountryCode;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
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

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    @Override
    public String toString() {
        return "Users{" +
                "userEmail='" + userEmail + '\'' +
                ", userName='" + userName + '\'' +
                ", userPhoneNumber='" + userPhoneNumber + '\'' +
                ", userCountryCode='" + userCountryCode + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", lastUpdatedUser='" + lastUpdatedUser + '\'' +
                ", lastCreatedUser='" + lastCreatedUser + '\'' +
                ", userAddress='" + userAddress + '\'' +
                '}';
    }
}
