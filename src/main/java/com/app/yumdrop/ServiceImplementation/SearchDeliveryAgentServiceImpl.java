package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.DeliveryAgent;
import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.UserOrder;
import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.FormEntity.DeliveryAgentActiveOrders;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.DeliveryAgentRepository;
import com.app.yumdrop.Repository.RestaurantRepository;
import com.app.yumdrop.Repository.UserOrderRepository;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Service.DistanceBetweenAddressesCalculatorService;
import com.app.yumdrop.Service.SearchDeliveryAgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SearchDeliveryAgentServiceImpl implements SearchDeliveryAgentService {

    @Autowired
    DeliveryAgentRepository deliveryAgentRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    DistanceBetweenAddressesCalculatorService distanceBetweenAddressesCalculatorService;

    @Autowired
    UserOrderRepository userOrderRepository;

    @Autowired
    UsersRepository usersRepository;

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

    @Override
    public ResponseEntity<?> getAllDeliveryAgentActiveOrders(UserOrder activeDeliveryOrders) {

        List<DeliveryAgentActiveOrders> deliveryAgentActiveOrders = new ArrayList<>();
        for(int i=0; i < 3; i++){

            if(activeDeliveryOrders.getOrderStatus() != 2){
                continue;
            }

            Restaurant restaurantDetail = restaurantRepository.findByrestaurantId(activeDeliveryOrders.getRestaurantId());
            Users userDetail = usersRepository.findByuserEmail(activeDeliveryOrders.getUserEmail());
            DeliveryAgentActiveOrders activeOrder = new DeliveryAgentActiveOrders(
                    activeDeliveryOrders.getOrderId(), restaurantDetail.getRestaurantName(), userDetail.getUserEmail(), userDetail.getUserName(),
                    restaurantDetail.getRestaurantAddress(), userDetail.getUserAddress());
            deliveryAgentActiveOrders.add(activeOrder);
        }
        System.out.println(" delivery agent order "+deliveryAgentActiveOrders.get(0));
        return new ResponseEntity<>(deliveryAgentActiveOrders.get(0), HttpStatus.OK);
    }
}
