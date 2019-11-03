package com.app.yumdrop.FormEntity;

import javax.persistence.Id;

public class DeliveryAgentDetails {

    public String da_name;
    public String da_password;

    @Id
    public String da_email;
    public String da_phonenum;


    DeliveryAgentDetails(){

    }

    public DeliveryAgentDetails(String da_name, String da_password) {
        this.da_name = da_name;
        this.da_password = da_password;
    }

    public DeliveryAgentDetails(String da_name, String da_password, String da_email, String da_phonenum) {
        this.da_name = da_name;
        this.da_password = da_password;
        this.da_email = da_email;
        this.da_phonenum = da_phonenum;
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

    public String getDA_email() {
        return da_email;
    }

    public void setDA_email(String da_email) {
        this.da_email = da_email;
    }

    public String getDA_phonenum() {
        return da_phonenum;
    }

    public void setDA_phonenum(String da_phonenum) {
        this.da_phonenum = da_phonenum;
    }

}

