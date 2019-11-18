package com.app.yumdrop.FormEntity;

import javax.persistence.Id;

public class DeliveryAgentDetails {

    public String deliveryAgent_name;
    public String deliveryAgent_password;

    @Id
    public String deliveryAgent_email;
    public String deliveryAgent_phonenum;


    DeliveryAgentDetails(){

    }

    public DeliveryAgentDetails(String deliveryAgent_name, String deliveryAgent_password) {
        this.deliveryAgent_name = deliveryAgent_name;
        this.deliveryAgent_password = deliveryAgent_password;
    }

    public DeliveryAgentDetails(String deliveryAgent_name, String deliveryAgent_password, String deliveryAgent_email, String deliveryAgent_phonenum) {
        this.deliveryAgent_name = deliveryAgent_name;
        this.deliveryAgent_password = deliveryAgent_password;
        this.deliveryAgent_email = deliveryAgent_email;
        this.deliveryAgent_phonenum = deliveryAgent_phonenum;
    }

    public String getDeliveryAgent_name() {
        return deliveryAgent_name;
    }

    public void setDeliveryAgent_name(String deliveryAgent_name) {
        this.deliveryAgent_name = deliveryAgent_name;
    }

    public String getDeliveryAgentPassword() {
        return deliveryAgent_password;
    }

    public void setDeliveryAgentPassword(String deliveryAgent_password) {
        this.deliveryAgent_password = deliveryAgent_password;
    }

    public String getDeliveryAgent_email() {
        return deliveryAgent_email;
    }

    public void setDeliveryAgent_email(String deliveryAgent_email) {
        this.deliveryAgent_email = deliveryAgent_email;
    }

    public String getDeliveryAgent_phonenum() {
        return deliveryAgent_phonenum;
    }

    public void setDeliveryAgent_phonenum(String deliveryAgent_phonenum) {
        this.deliveryAgent_phonenum = deliveryAgent_phonenum;
    }

}

