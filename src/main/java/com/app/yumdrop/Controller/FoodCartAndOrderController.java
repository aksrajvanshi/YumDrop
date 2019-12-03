package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.UserCart;
import com.app.yumdrop.Entity.UserOrder;
import com.app.yumdrop.FormEntity.RestaurantDetails;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.UserCartRepository;
import com.app.yumdrop.Repository.UserOrderRepository;
import com.app.yumdrop.Service.FoodOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Date;
import java.util.List;

@ComponentScan
@Controller
public class FoodCartAndOrderController {

    @Autowired
    UserCartRepository userCartRepository;

    @Autowired
    FoodOrderService foodOrderService;

    @Autowired
    UserOrderRepository userOrderRepository;

    /**
     * Adding an item to user cart table
     * @param userCartItem
     * @return
     */
    @RequestMapping(value = "/addDishToUserCart", method = RequestMethod.POST)
    public ResponseEntity<?> addDishToUserCart(@RequestBody UserCart userCartItem) {
        UserCart cartItemSaved = userCartRepository.save(userCartItem);

        if (cartItemSaved != null) {
            SuccessMessage itemAddedToCart = new SuccessMessage(new Date(), "Item is added to your cart");
            return new ResponseEntity<>(itemAddedToCart, HttpStatus.OK);
        } else {
            ErrorMessage itemNotAddedToCart = new ErrorMessage(new Date(), "Could not add item to cart, please try again",
                    "");
            return new ResponseEntity<>(itemNotAddedToCart, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = "/getUserDataForMyCart", method = RequestMethod.POST)
    public ResponseEntity<?> getUserDataForCart(@RequestBody UserCart userCartItem) {
        List<UserCart> userCartItems = userCartRepository.findByuserEmail(userCartItem.getUserEmail());
        return new ResponseEntity<>(userCartItems, HttpStatus.OK);
    }

    @RequestMapping(value = "/makeUserOrder", method = RequestMethod.POST)
    public ResponseEntity<?> createUserOrder(@RequestBody UserOrder userOrderDetails) {
        return foodOrderService.createFoodOrder(userOrderDetails);
    }
    @RequestMapping(value = "/getCurrentActiveOrderForUser", method = RequestMethod.POST)
    public ResponseEntity<?> getCurrentOrdersForUser(@RequestBody UserOrder userOrderDetails) {
        return foodOrderService.getCurrentUserOrders(userOrderDetails);
    }

    @RequestMapping(value = "/getCurrentActiveOrderForRestaurant", method = RequestMethod.POST)
    public ResponseEntity<?> getCurrentOrdersForRestaurant(@RequestBody RestaurantDetails restaurantDetails) {
        return foodOrderService.getCurrentRestaurantOrders(restaurantDetails);
    }

    @RequestMapping(value = "/changeOrderStatusFromRestaurant", method = RequestMethod.POST)
    public ResponseEntity<?> changeOrderStatusFromRestaurant(@RequestBody UserOrder orderDetails) {

        UserOrder orderInDb = userOrderRepository.findByorderId(orderDetails.getOrderId());
        orderInDb.setOrderStatus(orderDetails.getOrderStatus());
        userOrderRepository.save(orderInDb);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
