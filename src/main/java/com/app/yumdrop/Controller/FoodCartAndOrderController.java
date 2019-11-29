package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.UserCart;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.UserCartRepository;
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


}
