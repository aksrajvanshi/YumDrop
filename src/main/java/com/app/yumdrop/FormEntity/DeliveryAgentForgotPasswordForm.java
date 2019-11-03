package com.app.yumdrop.FormEntity;

public class DeliveryAgentForgotPasswordForm {

    private String daEmail;
    private String temporaryPassword;
    private String newPassword;

    public DeliveryAgentForgotPasswordForm() {
    }

    public DeliveryAgentForgotPasswordForm(String daEmail) {
        this.daEmail = daEmail;
    }

    public DeliveryAgentForgotPasswordForm(String daEmail, String temporaryPassword, String newPassword) {
        this.daEmail = daEmail;
        this.temporaryPassword = temporaryPassword;
        this.newPassword = newPassword;
    }


    @Override
    public String toString() {
        return "DeliveryAgentForgotPasswordForm{" +
                "daEmail='" + daEmail + '\'' +
                ", temporaryPassword='" + temporaryPassword + '\'' +
                ", newPassword='" + newPassword + '\'' +
                '}';
    }

    public String getDAEmail() {
        return daEmail;
    }

    public void setDAEmail(String daEmail) {
        this.daEmail = daEmail;
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
