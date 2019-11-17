package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.RestaurantRepository;
import com.app.yumdrop.Service.SaveRestaurantAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class SaveRestaurantAddressServiceImpl implements SaveRestaurantAddressService {

    @Autowired
    RestaurantRepository restaurantRepository;

    @Override
    public ResponseEntity<?> saveRestaurantAddress(Restaurant restaurantDetailsWithAddress) {

        if (restaurantDetailsWithAddress.getRestaurantAddress().length() == 0) {
            ErrorMessage emptyAddress = new ErrorMessage(new Date(), "Restaurant address cannot be empty",
                    "");
            return new ResponseEntity<>(emptyAddress, HttpStatus.BAD_REQUEST);
        }

        Restaurant restaurantDetails = restaurantRepository.findByrestaurantId(restaurantDetailsWithAddress.getRestaurantId());
        if (restaurantDetails == null) {
            ErrorMessage emptyAddress = new ErrorMessage(new Date(), "Restaurant doesn't exist in the database",
                    "");
            return new ResponseEntity<>(emptyAddress, HttpStatus.BAD_REQUEST);
        }


        restaurantDetails.setRestaurantAddress(restaurantDetailsWithAddress.getRestaurantAddress());
        Restaurant restaurantAddressSaved = restaurantRepository.save(restaurantDetails);
        if (restaurantAddressSaved != null) {
            SuccessMessage successfulLoginMessage = new SuccessMessage(new Date(), "Address successfully saved!");
            return new ResponseEntity<>(successfulLoginMessage, HttpStatus.OK);
        }

        ErrorMessage saveAddressUnsuccessful = new ErrorMessage(new Date(), "Restaurant address could not be saved",
                "");
        return new ResponseEntity<>(saveAddressUnsuccessful, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
