package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.Delivery_Agent_Otp;
import com.app.yumdrop.Entity.Delivery_Agent;
import org.springframework.data.repository.CrudRepository;

public interface DeliveryAgentOtpRepository extends CrudRepository<Delivery_Agent_Otp, String> {
    Delivery_Agent_Otp findBydaEmail(String daEmail);
}
