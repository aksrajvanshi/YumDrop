package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.DeliveryAgent;
import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.UserOrder;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.DeliveryAgentRepository;
import com.app.yumdrop.Repository.RestaurantRepository;
import com.app.yumdrop.Repository.UserOrderRepository;
import com.app.yumdrop.Service.DistanceBetweenAddressesCalculatorService;
import com.app.yumdrop.Service.SearchDeliveryAgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class SeachDeliveryAgentServiceImpl implements SearchDeliveryAgentService {

    @Autowired
    DeliveryAgentRepository deliveryAgentRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    DistanceBetweenAddressesCalculatorService distanceBetweenAddressesCalculatorService;

    @Autowired
    UserOrderRepository userOrderRepository;

    @Override
    public ResponseEntity<?> findNearestDeliveryAgentToTheRestaurant(UserOrder currentOrder) {
        List<DeliveryAgent> deliveryAgentList = deliveryAgentRepository.findAll();
        Restaurant restaurantDetails = restaurantRepository.findByrestaurantId(currentOrder.getRestaurantId());

        int deliveryAgentSelected = -1;
        long minDistanceOfDeliveryAgentFromRestaurant = Long.MAX_VALUE;
        for(int i=0; i < deliveryAgentList.size(); i++){

            long distanceBetweenDeliveryAgentAndRestaurant = distanceBetweenAddressesCalculatorService.
                    calculateDistanceBetweenDeliveryAgentAndRestaurant(restaurantDetails.getRestaurantAddress(), deliveryAgentList.get(i).getDeliveryAgentAddress());

            if(minDistanceOfDeliveryAgentFromRestaurant > distanceBetweenDeliveryAgentAndRestaurant){
                minDistanceOfDeliveryAgentFromRestaurant = distanceBetweenDeliveryAgentAndRestaurant;
                deliveryAgentSelected = i;
            }
        }

        currentOrder.setDeliveryAgentAssigned(deliveryAgentList.get(deliveryAgentSelected).getDeliveryAgentEmail());
        UserOrder orderUpdatedWithDeliveryAgent = userOrderRepository.save(currentOrder);

        if(orderUpdatedWithDeliveryAgent!= null) {
            SuccessMessage successfulLoginMessage = new SuccessMessage(new Date(), "Delivery agent assigned to " + deliveryAgentList.get(deliveryAgentSelected).getDeliveryAgentName());
            return new ResponseEntity<>(successfulLoginMessage, HttpStatus.OK);
        }

        ErrorMessage saveAddressUnsuccessful = new ErrorMessage(new Date(), "Delivery agent could not be assigned to this order!",
                "");
        return new ResponseEntity<>(saveAddressUnsuccessful, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> changeDeliveryAgentLocationAfterOrderDelivery(String deliveryAgentEmailAddress, String userAddress) {
        DeliveryAgent deliveryAgentDetails = deliveryAgentRepository.findByDeliveryAgentEmail(deliveryAgentEmailAddress);
        deliveryAgentDetails.setDeliveryAgentAddress(userAddress);
        DeliveryAgent deliveryAgent = deliveryAgentRepository.save(deliveryAgentDetails);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
