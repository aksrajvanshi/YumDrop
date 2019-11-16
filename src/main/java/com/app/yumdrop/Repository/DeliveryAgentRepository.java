package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.DeliveryAgent;
import org.springframework.data.repository.CrudRepository;

public interface DeliveryAgentRepository extends CrudRepository<DeliveryAgent, String> {

    DeliveryAgent findByDeliveryAgentEmail(String deliveryAgentEmail);
}
