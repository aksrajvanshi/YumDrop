package com.app.yumdrop.FormEntity;

public class UserFutureOrdersForm {

    public String orderId;
    public String email;
    public String time1;
    public String time2;
    public String time3;

    public UserFutureOrdersForm() {

    }

    public UserFutureOrdersForm(String orderId, String email, String time1, String time2, String time3) {

        this.orderId = orderId;
        this.email = email;
        this.time1 = time1;
        this.time2 = time2;
        this.time3 = time3;
    }

    @Override
    public String toString() {
        return "UserFutureOrdersForm{" +
                "orderId='" + orderId + '\'' +
                ", email='" + email + '\'' +
                ", time1='" + time1 + '\'' +
                ", time2='" + time2 + '\'' +
                ", time3='" + time3 + '\'' +
                '}';
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTime1() {
        return time1;
    }

    public void setTime1(String time1) {
        this.time1 = time1;
    }

    public String getTime2() {
        return time2;
    }

    public void setTime2(String time2) {
        this.time2 = time2;
    }

    public String getTime3() {
        return time3;
    }

    public void setTime3(String time3) {
        this.time3 = time3;
    }


}
