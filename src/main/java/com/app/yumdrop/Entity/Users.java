package com.app.yumdrop.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Entity
@Document("users")
public class Users extends CreateAndUpdateTimeModel {

    @Id
    public String userEmail;

    private String userAccountType; // Email, OAUTH

    private String accessToken;

    private String userName;

    private String userPhoneNumber;

    private String userCountryCode;

    private String userPassword;

    private String lastUpdatedUser;

    private String lastCreatedUser;

    private String userAddress;

    public Users() {
    }

    public Users(String userEmail) {
        this.userEmail = userEmail;
    }

    public Users(String userEmail, String userName, String userPassword) {
        this.userEmail = userEmail;
        this.userName = userName;
        this.userPassword = userPassword;
    }

    public Users(String userEmail, String userName, String userPassword, String lastUpdatedUser,
            String lastCreatedUser) {
        this.userEmail = userEmail;
        this.userName = userName;
        this.userPassword = userPassword;
        this.lastUpdatedUser = lastUpdatedUser;
        this.lastCreatedUser = lastCreatedUser;
    }

    public Users(String userEmail, String userName, String userAccountType, String userPassword, String lastUpdatedUser,
            String lastCreatedUser) {
        this.userEmail = userEmail;
        this.userName = userName;
        this.userAccountType = userAccountType;
        this.userPassword = userPassword;
        this.lastUpdatedUser = lastUpdatedUser;
        this.lastCreatedUser = lastCreatedUser;
    }

    public String getUserAccountType() {
        return userAccountType;
    }

    public void setUserAccountType(String userAccountType) {
        this.userAccountType = userAccountType;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
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
        return "Users{" + "userEmail='" + userEmail + '\'' + ", userName='" + userName + '\'' + ", userPhoneNumber='"
                + userPhoneNumber + '\'' + ", userCountryCode='" + userCountryCode + '\'' + ", userPassword='"
                + userPassword + '\'' + ", lastUpdatedUser='" + lastUpdatedUser + '\'' + ", lastCreatedUser='"
                + lastCreatedUser + '\'' + ", userAddress='" + userAddress + '\'' + '}';
    }
}
