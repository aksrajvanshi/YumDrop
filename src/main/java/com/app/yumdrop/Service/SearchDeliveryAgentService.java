package com.app.yumdrop.Service;

import com.app.yumdrop.Entity.UserOrder;
import org.springframework.http.ResponseEntity;

public interface SearchDeliveryAgentService {

    ResponseEntity<?> findNearestDeliveryAgentToTheRestaurant(UserOrder currentOrder);

}
