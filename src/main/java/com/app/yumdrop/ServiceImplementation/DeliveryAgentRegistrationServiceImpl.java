package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.DeliveryAgent;
import com.app.yumdrop.FormEntity.DeliveryAgentRegisterForm;
import com.app.yumdrop.Repository.DeliveryAgentRepository;
import com.app.yumdrop.Service.DeliveryAgentRegistrationService;
import com.app.yumdrop.Utils.PasswordUtils;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
public class DeliveryAgentRegistrationServiceImpl implements DeliveryAgentRegistrationService {

    @Autowired
    private DeliveryAgentRepository deliveryAgentRepository;

    @Override
    public ResponseEntity<?> registerDeliveryAgent(DeliveryAgentRegisterForm deliveryAgentDataForm) {

        DeliveryAgent deliveryAgentExistsInDb = deliveryAgentRepository.findByDeliveryAgentEmail(deliveryAgentDataForm.getDeliveryAgent_email());

        if (deliveryAgentExistsInDb!=null) {
            throw new ConstraintViolationException("Delivery Agent already exists", new SQLException(" Insert query"), "deliveryAgent_email");
        }

        DeliveryAgent daToRegister = new DeliveryAgent(deliveryAgentDataForm.getDeliveryAgent_email(), deliveryAgentDataForm.getDeliveryAgent_name(),
                deliveryAgentDataForm.getDeliveryAgent_phonenum(), PasswordUtils.convertPasswordToHash(deliveryAgentDataForm.getDeliveryAgent_password()), null, "SYSTEM", "SYSTEM", 0);

        DeliveryAgent registeredDeliveryAgent = deliveryAgentRepository.save(daToRegister);
        return ResponseEntity.ok().body(registeredDeliveryAgent);
    }
}
