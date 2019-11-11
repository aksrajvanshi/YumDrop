package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.RestaurantMenuItem;
import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.RestaurantMenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Date;

@ComponentScan
@Controller
public class AddDishToRestaurantController {

    @Autowired
    RestaurantMenuItemRepository restaurantMenuItemRepository;

    @RequestMapping(value = "/addDishToRestaurantMenu", method = RequestMethod.POST)
    public ResponseEntity<?> addDishToRestaurantMenu(@RequestBody RestaurantMenuItem restaurantMenuItem){

        // TO DO - put a check if a combination of dish and restaurant Id exists already!
        RestaurantMenuItem addedDishToRestaurant = restaurantMenuItemRepository.save(restaurantMenuItem);
        if(addedDishToRestaurant != null){
            SuccessMessage successfulDishAddition = new SuccessMessage(new Date(), "Dish was added successfully to Restaurant Menu");
            return new ResponseEntity<>(successfulDishAddition, HttpStatus.OK);
        }

        ErrorMessage dishNotAddedToDb = new ErrorMessage(new Date(), "Could not add dish, please try again",
                "");
        return new ResponseEntity<>(dishNotAddedToDb, HttpStatus.BAD_REQUEST);

    }
}
