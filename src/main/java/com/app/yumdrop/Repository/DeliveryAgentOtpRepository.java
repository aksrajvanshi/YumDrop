package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.DeliveryAgentOtp;
import org.springframework.data.repository.CrudRepository;

public interface DeliveryAgentOtpRepository extends CrudRepository<DeliveryAgentOtp, String> {
    DeliveryAgentOtp findBydaEmail(String daEmail);
}
