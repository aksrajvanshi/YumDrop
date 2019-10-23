package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users_new_password")
public class UsersNewPassword {

    @Id
    @Column(name = "user_email", nullable = false)
    private String userEmail;

    @Column(name = "user_new_password", nullable = false)
    private String newPassword;

    public UsersNewPassword() {
    }

    public UsersNewPassword(String userEmail, String newPassword) {
        this.userEmail = userEmail;
        this.newPassword = newPassword;
    }

    @Override
    public String toString() {
        return "UsersNewPassword{" +
                "userEmail='" + userEmail + '\'' +
                ", newPassword='" + newPassword + '\'' +
                '}';
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
