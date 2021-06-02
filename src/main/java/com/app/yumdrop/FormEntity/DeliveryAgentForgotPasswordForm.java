package com.app.yumdrop.FormEntity;

public class DeliveryAgentForgotPasswordForm {

    private String deliveryAgentEmail;
    private String temporaryPassword;
    private String newPassword;

    public DeliveryAgentForgotPasswordForm() {
    }

    public DeliveryAgentForgotPasswordForm(String deliveryAgentEmail) {
        this.deliveryAgentEmail = deliveryAgentEmail;
    }

    public DeliveryAgentForgotPasswordForm(String deliveryAgentEmail, String temporaryPassword, String newPassword) {
        this.deliveryAgentEmail = deliveryAgentEmail;
        this.temporaryPassword = temporaryPassword;
        this.newPassword = newPassword;
    }

    @Override
    public String toString() {
        return "DeliveryAgentForgotPasswordForm{" + "daEmail='" + deliveryAgentEmail + '\'' + ", temporaryPassword='"
                + temporaryPassword + '\'' + ", newPassword='" + newPassword + '\'' + '}';
    }

    public String getDeliveryAgentEmail() {
        return deliveryAgentEmail;
    }

    public void setDeliveryAgentEmail(String daEmail) {
        this.deliveryAgentEmail = deliveryAgentEmail;
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
