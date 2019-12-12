package com.app.yumdrop.Service;

import com.app.yumdrop.Entity.UserOrder;
import com.app.yumdrop.FormEntity.RestaurantDetails;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface FoodOrderService {

     ResponseEntity<?> createFoodOrder(@RequestBody UserOrder userOrderDetails);

     ResponseEntity<?> getCurrentUserOrders(@RequestBody UserOrder userOrderDetails);

     ResponseEntity<?> getCurrentRestaurantOrders(@RequestBody RestaurantDetails restaurantDetail);
}
