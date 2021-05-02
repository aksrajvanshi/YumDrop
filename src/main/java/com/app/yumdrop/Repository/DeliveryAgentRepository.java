package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.DeliveryAgent;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeliveryAgentRepository extends MongoRepository<DeliveryAgent, String> {

    DeliveryAgent findByDeliveryAgentEmail(String deliveryAgentEmail);
}
