package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document("userOtp")
public class UsersOtp extends CreateAndUpdateTimeModel {

    @Id
    private String userEmail;

    private String userOtp;

    public UsersOtp() {
    }

    public UsersOtp(String userEmail, String userOtp) {
        this.userEmail = userEmail;
        this.userOtp = userOtp;
    }

    @Override
    public String toString() {
        return "UsersOtp{" +
                "userEmail='" + userEmail + '\'' +
                ", userOtp='" + userOtp + '\'' +
                '}';
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserOtp() {
        return userOtp;
    }

    public void setUserOtp(String userOtp) {
        this.userOtp = userOtp;
    }
}
