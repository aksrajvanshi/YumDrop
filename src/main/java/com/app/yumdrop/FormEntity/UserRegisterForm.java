package com.app.yumdrop.FormEntity;

public class UserRegisterForm {

    private String user_email;
    private String user_name;
    private String user_password;
    private String user_phonenum;
    private String user_otp;
    private String user_countrycode;

    public UserRegisterForm(String user_email, String user_name, String user_password, String user_phonenum, String user_otp, String user_countrycode) {
        this.user_email = user_email;
        this.user_name = user_name;
        this.user_password = user_password;
        this.user_phonenum = user_phonenum;
        this.user_otp = user_otp;
        this.user_countrycode = user_countrycode;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_password() {
        return user_password;
    }

    public void setUser_password(String user_password) {
        this.user_password = user_password;
    }

    public String getUser_phonenum() {
        return user_phonenum;
    }

    public void setUser_phonenum(String user_phonenum) {
        this.user_phonenum = user_phonenum;
    }

    public String getUser_otp() {
        return user_otp;
    }

    public void setUser_otp(String user_otp) {
        this.user_otp = user_otp;
    }

    public String getUser_countrycode() {
        return user_countrycode;
    }

    public void setUser_countrycode(String user_countrycode) {
        this.user_countrycode = user_countrycode;
    }
}
