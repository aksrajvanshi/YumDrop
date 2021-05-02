package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Document(collection = "users_otp")
public class UsersOtp extends CreateAndUpdateTimeModel{

    @Id
    @Column(name = "user_email", nullable = false)
    @Email(message = "user email should be a valid email")
    private String userEmail;

    @NotNull
    @Column(name = "user_otp", nullable = false)
    private String userOtp;

    public UsersOtp() {
    }

    public UsersOtp(@Email(message = "user email should be a valid email") String userEmail, @NotNull String userOtp) {
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
