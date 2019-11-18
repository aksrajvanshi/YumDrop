package com.app.yumdrop.FormEntity;

public class DeliveryAgentRegisterForm {
    private String deliveryAgent_email;
    private String deliveryAgent_name;
    private String deliveryAgent_password;
    private String deliveryAgent_phonenum;
    private String deliveryAgent_otp;


    public DeliveryAgentRegisterForm(String deliveryAgent_email, String deliveryAgent_name, String deliveryAgent_password, String deliveryAgent_phonenum, String deliveryAgent_otp) {
        this.deliveryAgent_email = deliveryAgent_email;
        this.deliveryAgent_name = deliveryAgent_name;
        this.deliveryAgent_password = deliveryAgent_password;
        this.deliveryAgent_phonenum = deliveryAgent_phonenum;
        this.deliveryAgent_otp = deliveryAgent_otp;
    }

    public String getDeliveryAgent_email() {
        return deliveryAgent_email;
    }

    public void setDeliveryAgent_email(String deliveryAgent_email) {
        this.deliveryAgent_email = deliveryAgent_email;
    }

    public String getDeliveryAgent_name() {
        return deliveryAgent_name;
    }

    public void setDeliveryAgent_name(String da_name) {
        this.deliveryAgent_name = deliveryAgent_name;
    }

    public String getDeliveryAgent_password() {
        return deliveryAgent_password;
    }

    public void setDeliveryAgent_password(String deliveryAgent_password) {
        this.deliveryAgent_password = deliveryAgent_password;
    }

    public String getDeliveryAgent_phonenum() {
        return deliveryAgent_phonenum;
    }

    public void setDeliveryAgent_phonenum(String deliveryAgent_phonenum) {
        this.deliveryAgent_phonenum = deliveryAgent_phonenum;
    }

    public String getDeliveryAgent_otp() {
        return deliveryAgent_otp;
    }

    public void setDeliveryAgent_otp(String deliveryAgent_otp) {
        this.deliveryAgent_otp = deliveryAgent_otp;
    }
}
