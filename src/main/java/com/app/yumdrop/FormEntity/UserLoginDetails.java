package com.app.yumdrop.FormEntity;


public class UserLoginDetails {

    public String user_name;
    public String userPassword;

    public UserLoginDetails() {
    }

    public UserLoginDetails(String user_name, String userPassword) {
        this.user_name = user_name;
        this.userPassword = userPassword;
    }

    @Override
    public String toString() {
        return "UserLoginDetails{" +
                "user_name='" + user_name + '\'' +
                ", userPassword='" + userPassword + '\'' +
                '}';
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
}
