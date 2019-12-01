package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.UserCart;
import com.app.yumdrop.Entity.UserOrder;
import com.app.yumdrop.Entity.UserOrderId;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.UserCartRepository;
import com.app.yumdrop.Repository.UserOrderRepository;
import com.app.yumdrop.Service.FoodOrderService;
import com.app.yumdrop.Utils.OrderStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

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
        if(cartContents.size() == 0){
            ErrorMessage cartEmpty = new ErrorMessage(new Date(), "Cart is empty!",
                    "");
            return new ResponseEntity<>(cartEmpty, HttpStatus.BAD_REQUEST);
        }

        String orderContents = "";
        for(int i=0; i < cartContents.size(); i++){
            orderContents += cartContents.get(i).getDishName() + "," + cartContents.get(i).getDishQuantity() + ";";
        }
        String finalOrderContents = "";
        finalOrderContents = orderContents.substring(0, orderContents.length()-1);


        UserOrderId userOrderId = new UserOrderId(userOrderDetails.getUserEmail(), userOrderDetails.getRestaurantId());
        Long orderId = userOrderRepository.getNextSeriesId();
        UserOrder userOrderToPlace = new UserOrder
                (userOrderId, userOrderDetails.getOrderStatus(), finalOrderContents, orderId);
        UserOrder savedUserOrder = userOrderRepository.save(userOrderToPlace);
        userCartRepository.deleteByuserEmail(userOrderDetails.getUserEmail());

        if(savedUserOrder!= null) {
            SuccessMessage orderPlaced = new SuccessMessage(new Date(), "Order successfully placed!");
            return new ResponseEntity<>(orderPlaced, HttpStatus.OK);
        }

        ErrorMessage problemWithVerifyTemporaryPasswordAndSetNewPassword = new ErrorMessage(new Date(), "Internal System error.",
                "");
        return new ResponseEntity<>(problemWithVerifyTemporaryPasswordAndSetNewPassword, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
