package com.app.yumdrop.FormEntity;

public class DeliveryAgentLoginDetails {

    public String da_email;
    public String da_password;

    public DeliveryAgentLoginDetails() {
    }

    public DeliveryAgentLoginDetails(String da_email, String da_password) {

        this.da_email = da_email;
        this.da_password = da_password;
    }

    @Override
    public String toString() {
        return "DeliveryAgentLoginDetails{" +
                "da_email='" + da_email + '\'' +
                ", da_password='" + da_password + '\'' +
                '}';
    }

    public String getDAEmail() {
        return da_email;
    }

    public void setDAEmail(String da_email) {
        this.da_email = da_email;
    }

    public String getDAPassword() {
        return da_password;
    }

    public void setDAPassword(String da_password) {
        this.da_password = da_password;
    }
}
