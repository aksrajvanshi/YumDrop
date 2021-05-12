package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Document("userTemporaryPassword")
public class UsersTemporaryPassword {

    @Id
    @Column(name = "user_email", nullable = false)
    private String userEmail;

    @Column(name = "user_temp_password", nullable = false)
    private String temporaryPassword;

    public UsersTemporaryPassword() {
    }

    public UsersTemporaryPassword(String userEmail, String temporaryPassword) {
        this.userEmail = userEmail;
        this.temporaryPassword = temporaryPassword;
    }

    @Override
    public String toString() {
        return "UsersTemporaryPassword{" +
                "userEmail='" + userEmail + '\'' +
                ", temporaryPassword='" + temporaryPassword + '\'' +
                '}';
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getTemporaryPassword() {
        return temporaryPassword;
    }

    public void setTemporaryPassword(String temporaryPassword) {
        this.temporaryPassword = temporaryPassword;
    }
}
