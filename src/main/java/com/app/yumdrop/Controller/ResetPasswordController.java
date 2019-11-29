package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.DeliveryAgent;
import com.app.yumdrop.Entity.RestaurantManager;
import com.app.yumdrop.Entity.RestaurantManagerId;
import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.DeliveryAgentRepository;
import com.app.yumdrop.Repository.RestaurantManagerRepository;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Date;
import java.util.Optional;

@ComponentScan
@Controller
public class ResetPasswordController {

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    RestaurantManagerRepository restaurantManagerRepository;

    @Autowired
    DeliveryAgentRepository deliveryAgentRepository;

    @RequestMapping(value = "/resetUserPassword", method = RequestMethod.POST)
    public ResponseEntity<?> resetUserPassword(@RequestBody Users userResetPasswordData) {
        Users userExistingRecord = usersRepository.findByuserEmail(userResetPasswordData.getUserEmail());
        userExistingRecord.setUserPassword(PasswordUtils.convertPasswordToHash(userResetPasswordData.getUserPassword()));
        Users userWithNewData = usersRepository.save(userExistingRecord);
        if (userWithNewData == null) {
            ErrorMessage userNotAddedToDb = new ErrorMessage(new Date(), "A problem occurred with the DB",
                    "");
            return new ResponseEntity<>(userNotAddedToDb, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        SuccessMessage successfulResetPassword = new SuccessMessage(new Date(), "Password was reset successfully!");
        return new ResponseEntity<>(successfulResetPassword, HttpStatus.OK);
    }

    @RequestMapping(value = "/resetRestaurantManagerPassword", method = RequestMethod.POST)
    public ResponseEntity<?> resetRestaurantManagerPassword(@RequestBody RestaurantManager restaurantManagerData) {
        Optional<RestaurantManager> restaurantManagerExistingRecord = restaurantManagerRepository.findById(
                new RestaurantManagerId(restaurantManagerData.getRestaurantId(), restaurantManagerData.getRestaurantManagerEmailId()));

        RestaurantManager restaurantManagerDbRecord = null;
        if (restaurantManagerExistingRecord.isPresent()) {
            restaurantManagerDbRecord = restaurantManagerExistingRecord.get();
            restaurantManagerDbRecord.setRestaurantManagerPassword(PasswordUtils.convertPasswordToHash(restaurantManagerData.getRestaurantManagerPassword()));
        }

        if (restaurantManagerDbRecord != null) {
            RestaurantManager newRestaurantManagerRecord = restaurantManagerRepository.save(restaurantManagerDbRecord);
            if (newRestaurantManagerRecord == null) {
                ErrorMessage userNotAddedToDb = new ErrorMessage(new Date(), "A problem occurred with the DB",
                        "");
                return new ResponseEntity<>(userNotAddedToDb, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        SuccessMessage successfulResetPassword = new SuccessMessage(new Date(), "Password was reset successfully!");
        return new ResponseEntity<>(successfulResetPassword, HttpStatus.OK);
    }

    @RequestMapping(value = "/deliveryAgentResetPassword", method = RequestMethod.POST)
    public ResponseEntity<?> resetDeliveryAgentPassword(@RequestBody DeliveryAgent deliveryAgentData) {
        DeliveryAgent deliveryAgentExistingRecord = deliveryAgentRepository.findByDeliveryAgentEmail(deliveryAgentData.getDeliveryAgentEmail());

        deliveryAgentExistingRecord.setDeliveryAgentPassword(PasswordUtils.convertPasswordToHash(deliveryAgentData.getDeliveryAgentPassword()));
        DeliveryAgent deliveryAgentNewRecord = deliveryAgentRepository.save(deliveryAgentExistingRecord);

        if (deliveryAgentNewRecord != null) {
            SuccessMessage successfulResetPassword = new SuccessMessage(new Date(), "Password was reset successfully!");
            return new ResponseEntity<>(successfulResetPassword, HttpStatus.OK);
        }

        ErrorMessage deliveryAgentNotAddedToDb = new ErrorMessage(new Date(), "A problem occurred with the DB",
                "");
        return new ResponseEntity<>(deliveryAgentNotAddedToDb, HttpStatus.INTERNAL_SERVER_ERROR);

    }


}
