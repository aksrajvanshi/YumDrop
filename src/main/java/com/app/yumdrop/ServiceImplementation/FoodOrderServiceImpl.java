package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.UserCart;
import com.app.yumdrop.Entity.UserOrder;
import com.app.yumdrop.Entity.UserOrderId;
import com.app.yumdrop.FormEntity.RestaurantDetails;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.UserCartRepository;
import com.app.yumdrop.Repository.UserOrderRepository;
import com.app.yumdrop.Service.FoodOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class FoodOrderServiceImpl implements FoodOrderService {

    @Autowired
    UserCartRepository userCartRepository;

    @Autowired
    UserOrderRepository userOrderRepository;

    @Override
    public ResponseEntity<?> createFoodOrder(UserOrder userOrderDetails) {
        List<UserCart> cartContents = userCartRepository.findByuserEmail(userOrderDetails.getUserEmail());
        if (cartContents.size() == 0) {
            ErrorMessage cartEmpty = new ErrorMessage(new Date(), "Cart is empty!",
                    "");
            return new ResponseEntity<>(cartEmpty, HttpStatus.BAD_REQUEST);
        }

        String orderContents = "";
        Double orderPrice = 0.0;
        for (int i = 0; i < cartContents.size(); i++) {
            orderContents += cartContents.get(i).getDishName() + "," + cartContents.get(i).getDishQuantity() + ";";
            orderPrice += cartContents.get(i).getDishQuantity() * cartContents.get(i).getDishPrice();
        }
        String finalOrderContents = "";
        finalOrderContents = orderContents.substring(0, orderContents.length() - 1);


        UserOrderId userOrderId = new UserOrderId(userOrderDetails.getUserEmail(), userOrderDetails.getRestaurantId());
        Long orderId = userOrderRepository.getNextSeriesId();
        UserOrder userOrderToPlace = new UserOrder
                (userOrderId, userOrderDetails.getOrderStatus(), finalOrderContents, orderId, orderPrice);
        UserOrder savedUserOrder = userOrderRepository.save(userOrderToPlace);
        userCartRepository.deleteByuserEmail(userOrderDetails.getUserEmail());

        if (savedUserOrder != null) {
            SuccessMessage orderPlaced = new SuccessMessage(new Date(), "Order successfully placed!");
            return new ResponseEntity<>(orderPlaced, HttpStatus.OK);
        }

        ErrorMessage problemWithVerifyTemporaryPasswordAndSetNewPassword = new ErrorMessage(new Date(), "Internal System error.",
                "");
        return new ResponseEntity<>(problemWithVerifyTemporaryPasswordAndSetNewPassword, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> getCurrentUserOrders(UserOrder userOrderDetails) {
        List<UserOrder> getAllUserOrders = userOrderRepository.findByuserEmail(userOrderDetails.getUserEmail());
        List<Integer> indexToRemove = new ArrayList<>();
        for (int i = 0; i < getAllUserOrders.size(); i++) {
            if (getAllUserOrders.get(i).getOrderStatus() == 3) {
                indexToRemove.add(i);
            }
        }

        for (int j = 0; j < indexToRemove.size(); j++) {
            getAllUserOrders.remove(indexToRemove.get(j));
        }

        return new ResponseEntity<>(getAllUserOrders, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> getCurrentRestaurantOrders(RestaurantDetails restaurantDetail) {
        List<UserOrder> getAllRestaurantOrders = userOrderRepository.findByrestaurantId(restaurantDetail.getRestaurantId());
        List<Integer> indexToRemove = new ArrayList<>();
        for (int i = 0; i < getAllRestaurantOrders.size(); i++) {
            // remove orders that are already delivered
            if (getAllRestaurantOrders.get(i).getOrderStatus() == 3) {
                indexToRemove.add(i);
            }
        }

        for (int j = 0; j < indexToRemove.size(); j++) {
            getAllRestaurantOrders.remove(indexToRemove.get(j));
        }

        return new ResponseEntity<>(getAllRestaurantOrders, HttpStatus.OK);
    }

}
