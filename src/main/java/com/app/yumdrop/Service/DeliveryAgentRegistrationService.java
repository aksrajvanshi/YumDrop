package com.app.yumdrop.Service;

import com.app.yumdrop.FormEntity.DeliveryAgentRegisterForm;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface DeliveryAgentRegistrationService {

    ResponseEntity<?> registerDeliveryAgent(@RequestBody DeliveryAgentRegisterForm deliveryAgentDataForm);

}