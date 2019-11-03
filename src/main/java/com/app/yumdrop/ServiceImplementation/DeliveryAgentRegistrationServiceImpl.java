package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Delivery_Agent;
import com.app.yumdrop.FormEntity.DeliveryAgentRegisterForm;
import com.app.yumdrop.Repository.DeliveryAgentRepository;
import com.app.yumdrop.Service.DeliveryAgentRegistrationService;
import com.app.yumdrop.Utils.PasswordUtils;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
public class DeliveryAgentRegistrationServiceImpl implements DeliveryAgentRegistrationService {

    @Autowired
    private DeliveryAgentRepository daRepository;

    @Override
    public ResponseEntity<?> registerDeliveryAgent(DeliveryAgentRegisterForm deliveryAgentDataForm) {

        Delivery_Agent daExistsInDb = daRepository.findBydaEmail(deliveryAgentDataForm.getDA_email());

        if (daExistsInDb!=null) {
            throw new ConstraintViolationException("Delivery Agent already exists", new SQLException(" Insert query"), "da_email");
        }

        Delivery_Agent daToRegister = new Delivery_Agent(deliveryAgentDataForm.getDA_email(), deliveryAgentDataForm.getDA_name(),
                deliveryAgentDataForm.getDA_phonenum(), PasswordUtils.convertPasswordToHash(deliveryAgentDataForm.getDA_password()), null, "SYSTEM", "SYSTEM");

        Delivery_Agent registeredDeliveryAgent = daRepository.save(daToRegister);
        return ResponseEntity.ok().body(registeredDeliveryAgent);
    }
}
