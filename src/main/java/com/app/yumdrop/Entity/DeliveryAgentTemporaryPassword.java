package com.app.yumdrop.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

@Entity
@Table(name = "delivery_agent_temporary_password")
public class DeliveryAgentTemporaryPassword {

    @Id
    @Column(name = "da_email", nullable = false)
    @Email(message = "delivery agent email should be a valid email")
    private String daEmail;

    @Column(name = "da_temp_password", nullable = false)
    private String temporaryPassword;

    public DeliveryAgentTemporaryPassword() {
    }

    public DeliveryAgentTemporaryPassword(String daEmail, String temporaryPassword) {
        this.daEmail = daEmail;
        this.temporaryPassword = temporaryPassword;
    }

    @Override
    public String toString() {
        return "Delivery_Agent_Temporary_Password{" +
                "daEmail='" + daEmail + '\'' +
                ", temporaryPassword='" + temporaryPassword + '\'' +
                '}';
    }

    public String getDAEmail() {
        return daEmail;
    }

    public void setDAEmail(String daEmail) {
        this.daEmail = daEmail;
    }

    public String getTemporaryPassword() {
        return temporaryPassword;
    }

    public void setTemporaryPassword(String temporaryPassword) {
        this.temporaryPassword = temporaryPassword;
    }
}
