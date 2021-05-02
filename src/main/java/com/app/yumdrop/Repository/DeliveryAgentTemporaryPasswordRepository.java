package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.DeliveryAgentTemporaryPassword;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeliveryAgentTemporaryPasswordRepository extends MongoRepository<DeliveryAgentTemporaryPassword, String> {

    DeliveryAgentTemporaryPassword findByDeliveryAgentEmail(String deliveryAgentEmail);
}
