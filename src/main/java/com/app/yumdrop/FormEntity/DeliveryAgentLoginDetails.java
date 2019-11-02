package com.app.yumdrop.FormEntity;

public class DeliveryAgentLoginDetails {


    public String da_name;
    public String da_password;

    public DeliveryAgentLoginDetails() {
    }

    public DeliveryAgentLoginDetails(String da_name, String da_password) {
        this.da_name = da_name;
        this.da_password = da_password;
    }

    @Override
    public String toString() {
        return "DeliveryAgentLoginDetails{" +
                "da_name='" + da_name + '\'' +
                ", da_password='" + da_password + '\'' +
                '}';
    }

    public String getDA_name() {
        return da_name;
    }

    public void setDA_name(String da_name) {
        this.da_name = da_name;
    }

    public String getDAPassword() {
        return da_password;
    }

    public void setDAPassword(String da_password) {
        this.da_password = da_password;
    }
}
