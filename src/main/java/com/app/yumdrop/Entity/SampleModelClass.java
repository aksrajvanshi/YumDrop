package com.app.yumdrop.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class SampleModelClass {

    @Id
    private String email;

    public SampleModelClass() {
    }

    @Override
    public String toString() {
        return "SampleModelClass{" +
                "email='" + email + '\'' +
                '}';
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
