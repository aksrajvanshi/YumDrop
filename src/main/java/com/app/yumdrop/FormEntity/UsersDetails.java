package com.app.yumdrop.FormEntity;

import javax.persistence.Id;

public class UsersDetails {
    public String user_name;
    public String user_password;

    @Id
    public String user_email;
    public String user_phonenum;


    UsersDetails(){

    }

    public UsersDetails(String user_name, String userPassword, String user_email, String user_phonenum) {
        this.user_name = user_name;
        this.user_password = userPassword;
        this.user_email = user_email;
        this.user_phonenum = user_phonenum;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUserPassword() {
        return user_password;
    }

    public void setUserPassword(String userPassword) {
        this.user_password = userPassword;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_phonenum() {
        return user_phonenum;
    }

    public void setUser_phonenum(String user_phonenum) {
        this.user_phonenum = user_phonenum;
    }


}

