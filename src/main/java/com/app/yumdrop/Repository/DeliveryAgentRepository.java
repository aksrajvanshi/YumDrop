package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.Delivery_Agent;
import org.springframework.data.repository.CrudRepository;

public interface DeliveryAgentRepository extends CrudRepository<Delivery_Agent, String> {

    Delivery_Agent findByDeliveryAgentEmail(String deliveryAgentEmail);
}
