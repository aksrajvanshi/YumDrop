package com.app.yumdrop.FormEntity;

public class UpdatePasswordForm {

    private String userEmail;
    private String password;
    private String confirmPassword;

    public UpdatePasswordForm() {
    }

    public UpdatePasswordForm(String userEmail) {
        this.userEmail = userEmail;
    }

    public UpdatePasswordForm(String userEmail, String password, String confirmPassword) {
        this.userEmail = userEmail;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }


    @Override
    public String toString() {
        return "UpdatePasswordForm{" +
                "userEmail='" + userEmail + '\'' +
                ", password='" + password + '\'' +
                ", confirmPassword='" + confirmPassword + '\'' +
                '}';
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

}