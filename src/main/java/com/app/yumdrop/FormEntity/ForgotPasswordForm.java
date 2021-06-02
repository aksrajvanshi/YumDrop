package com.app.yumdrop.FormEntity;

public class ForgotPasswordForm {

    private String userEmail;
    private String temporaryPassword;
    private String newPassword;

    public ForgotPasswordForm() {
    }

    public ForgotPasswordForm(String userEmail) {
        this.userEmail = userEmail;
    }

    public ForgotPasswordForm(String userEmail, String temporaryPassword, String newPassword) {
        this.userEmail = userEmail;
        this.temporaryPassword = temporaryPassword;
        this.newPassword = newPassword;
    }

    @Override
    public String toString() {
        return "ForgotPasswordForm{" + "userEmail='" + userEmail + '\'' + ", temporaryPassword='" + temporaryPassword
                + '\'' + ", newPassword='" + newPassword + '\'' + '}';
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

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
