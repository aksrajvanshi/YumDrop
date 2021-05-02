package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.DeliveryAgentOtp;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeliveryAgentOtpRepository extends MongoRepository<DeliveryAgentOtp, String> {
    DeliveryAgentOtp findByDeliveryAgentEmail(String deliveryAgentEmail);
}
