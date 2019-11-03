package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "delivery_agent_otp")
public class Delivery_Agent_Otp extends CreateAndUpdateTimeModel {

    @Id
    @Column(name = "da_email", nullable = false)
    @Email(message = "Delivery agent email should be a valid email")
    public String daEmail;

    @NotNull
    @Column(name = "da_otp", nullable = false)
    public String daOtp;

    public Delivery_Agent_Otp() {
    }

    public Delivery_Agent_Otp(@Email(message = "Delivery agent email should be a valid email") String daEmail, @NotNull String daOtp) {
        this.daEmail = daEmail;
        this.daOtp = daOtp;
    }

    @Override
    public String toString() {
        return "Delivery_Agent_Otp{" +
                "daEmail='" + daEmail + '\'' +
                ", daOtp='" + daOtp + '\'' +
                '}';
    }

    public String getDAEmail() {
        return daEmail;
    }

    public void setDAEmail(String daEmail) {
        this.daEmail = daEmail;
    }

    public String getDAOtp() {
        return daOtp;
    }

    public void setDAOtp(String daOtp) {
        this.daOtp = daOtp;
    }
}
