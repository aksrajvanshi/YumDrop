package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.Delivery_Agent_Temporary_Password;
import org.springframework.data.repository.CrudRepository;


public interface DeliveryAgentTemporaryPasswordRepository extends CrudRepository<Delivery_Agent_Temporary_Password, String> {

    Delivery_Agent_Temporary_Password findBydaEmail(String daEmail);
}
