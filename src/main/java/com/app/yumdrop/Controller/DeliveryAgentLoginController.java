package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.DeliveryAgent;
import com.app.yumdrop.FormEntity.DeliveryAgentLoginDetails;
import com.app.yumdrop.Repository.DeliveryAgentRepository;

import com.app.yumdrop.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@ComponentScan
@Controller
public class DeliveryAgentLoginController {

    @Autowired
    private DeliveryAgentRepository deliveryAgentRepository;

    @RequestMapping(value = "/deliveryAgentLoginDataForm", method = RequestMethod.POST)
    public ResponseEntity<?> deliveryAgentLogin(@RequestBody DeliveryAgentLoginDetails deliveryAgentLoginDetails) {

        DeliveryAgent loggedInUser = deliveryAgentRepository.findByDeliveryAgentEmail(deliveryAgentLoginDetails.getdeliveryAgentLoginEmail());
        if (loggedInUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        if (loggedInUser.getDeliveryAgentEmail().equals(deliveryAgentLoginDetails.getdeliveryAgentLoginEmail())
                && PasswordUtils.checkIfPasswordMatches(deliveryAgentLoginDetails.getdeliveryAgentLoginPassword(), loggedInUser.getDeliveryAgentPassword())) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

}