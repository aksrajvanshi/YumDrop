package com.app.yumdrop.Service;

import com.app.yumdrop.Entity.UserOrder;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface SearchDeliveryAgentService {

    ResponseEntity<?> findNearestDeliveryAgentToTheRestaurant(UserOrder currentOrder);

    ResponseEntity<?> changeDeliveryAgentLocationAfterOrderDelivery(String deliveryAgentEmailAddress, String userAddress);

    ResponseEntity<?> getAllDeliveryAgentActiveOrders(List<UserOrder> activeDeliveryOrders);

}
