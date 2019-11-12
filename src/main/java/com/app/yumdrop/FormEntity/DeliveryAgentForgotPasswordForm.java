package com.app.yumdrop.FormEntity;

public class DeliveryAgentForgotPasswordForm {

    private String deliveryAgentEmail;
    private String deliveryAgentTemporaryPassword;
    private String newPassword;

    public DeliveryAgentForgotPasswordForm() {
    }

    public DeliveryAgentForgotPasswordForm(String deliveryAgentEmail) {
        this.deliveryAgentEmail = deliveryAgentEmail;
    }

    public DeliveryAgentForgotPasswordForm(String deliveryAgentEmail, String deliveryAgentTemporaryPassword, String newPassword) {
        this.deliveryAgentEmail = deliveryAgentEmail;
        this.deliveryAgentTemporaryPassword = deliveryAgentTemporaryPassword;
        this.newPassword = newPassword;
    }

    @Override
    public String toString() {
        return "DeliveryAgentForgotPasswordForm{" +
                "daEmail='" + deliveryAgentEmail + '\'' +
                ", deliveryAgentTemporaryPassword='" + deliveryAgentTemporaryPassword + '\'' +
                ", newPassword='" + newPassword + '\'' +
                '}';
    }

    public String getDeliveryAgentEmail() {
        return deliveryAgentEmail;
    }

    public void setDeliveryAgentEmail(String deliveryAgentEmail) {
        this.deliveryAgentEmail = deliveryAgentEmail;
    }

    public String getDeliveryAgentTemporaryPassword() {
        return deliveryAgentTemporaryPassword;
    }

    public void setTemporaryPassword(String deliveryAgentTemporaryPassword) {
        this.deliveryAgentTemporaryPassword = deliveryAgentTemporaryPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
