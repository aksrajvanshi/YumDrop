package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.DeliveryAgentTemporaryPassword;
import org.springframework.data.repository.CrudRepository;


public interface DeliveryAgentTemporaryPasswordRepository extends CrudRepository<DeliveryAgentTemporaryPassword, String> {

    DeliveryAgentTemporaryPassword findByDeliveryAgentEmail(String deliveryAgentEmail);
}
