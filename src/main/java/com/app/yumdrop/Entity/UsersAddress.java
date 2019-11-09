package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "users_address")
public class UsersAddress {

    @Id
    @NotNull
    @Column(name = "user_email", nullable = false)
    private String userEmail;

    @NotNull
    @Column(name = "user_area", nullable = false)
    private String userArea;

    @NotNull
    @Column(name = "user_city", nullable = false)
    private String userCity;

    @NotNull
    @Column(name = "user_address", nullable = false)
    private String userAddress;

    public UsersAddress() {
    }

    public UsersAddress(@NotNull String userEmail, @NotNull String userArea, @NotNull String userCity, @NotNull String userAddress) {
        this.userEmail = userEmail;
        this.userArea = userArea;
        this.userCity = userCity;
        this.userAddress = userAddress;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserArea() {
        return userArea;
    }

    public void setUserArea(String userArea) {
        this.userArea = userArea;
    }

    public String getUserCity() {
        return userCity;
    }

    public void setUserCity(String userCity) {
        this.userCity = userCity;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }
}
