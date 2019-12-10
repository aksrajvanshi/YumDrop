package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.DeliveryAgent;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DeliveryAgentRepository extends CrudRepository<DeliveryAgent, String> {

    DeliveryAgent findByDeliveryAgentEmail(String deliveryAgentEmail);

    List<DeliveryAgent> findAll();
}
