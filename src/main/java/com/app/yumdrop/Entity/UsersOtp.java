package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "users_otp")
public class UsersOtp extends CreateAndUpdateTimeModel{

    @Id
    @Column(name = "user_email", nullable = false)
    @Email(message = "user email should be a valid email")
    private String user_email;

    @NotNull
    @Column(name = "user_otp", nullable = false)
    private String user_otp;

    public UsersOtp(@Email(message = "user email should be a valid email") String user_email, @NotNull String user_otp) {
        this.user_email = user_email;
        this.user_otp = user_otp;
    }

    public UsersOtp() {
    }

    @Override
    public String toString() {
        return "UsersOtp{" +
                "user_email='" + user_email + '\'' +
                ", user_otp='" + user_otp + '\'' +
                '}';
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_otp() {
        return user_otp;
    }

    public void setUser_otp(String user_otp) {
        this.user_otp = user_otp;
    }
}
