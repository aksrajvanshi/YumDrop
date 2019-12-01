package com.app.yumdrop.Service;

import com.app.yumdrop.Entity.UserOrder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface FoodOrderService {

     ResponseEntity<?> createFoodOrder(@RequestBody UserOrder userOrderDetails);
}
