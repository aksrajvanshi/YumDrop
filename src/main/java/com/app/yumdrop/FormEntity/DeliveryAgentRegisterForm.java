package com.app.yumdrop.FormEntity;

public class DeliveryAgentRegisterForm {
    private String da_email;
    private String da_name;
    private String da_password;
    private String da_phonenum;
    private String da_otp;


    public DeliveryAgentRegisterForm(String da_email, String da_name, String da_password, String da_phonenum, String da_otp) {
        this.da_email = da_email;
        this.da_name = da_name;
        this.da_password = da_password;
        this.da_phonenum = da_phonenum;
        this.da_otp = da_otp;
    }

    public String getDA_email() {
        return da_email;
    }

    public void setDA_email(String da_email) {
        this.da_email = da_email;
    }

    public String getDA_name() {
        return da_name;
    }

    public void setDA_name(String da_name) {
        this.da_name = da_name;
    }

    public String getDA_password() {
        return da_password;
    }

    public void setDA_password(String da_password) {
        this.da_password = da_password;
    }

    public String getDA_phonenum() {
        return da_phonenum;
    }

    public void setDA_phonenum(String da_phonenum) {
        this.da_phonenum = da_phonenum;
    }

    public String getDA_otp() {
        return da_otp;
    }

    public void setDA_otp(String da_otp) {
        this.da_otp = da_otp;
    }
}
