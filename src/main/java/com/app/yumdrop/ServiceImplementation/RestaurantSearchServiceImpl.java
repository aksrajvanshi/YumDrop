package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.RestaurantRatings;
import com.app.yumdrop.Entity.UserRestaurantRatings;
import com.app.yumdrop.Entity.UserRestaurantRatingsId;
import com.app.yumdrop.FormEntity.RestaurantSearchResults;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.RestaurantRatingsRepository;
import com.app.yumdrop.Repository.RestaurantRepository;
import com.app.yumdrop.Repository.UserRestaurantRatingsRepository;
import com.app.yumdrop.Service.DistanceBetweenAddressesCalculatorService;
import com.app.yumdrop.Service.RestaurantSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantSearchServiceImpl implements RestaurantSearchService {

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    UserRestaurantRatingsRepository userRestaurantRatingsRepository;

    @Autowired
    RestaurantRatingsRepository restaurantRatingsRepository;

    @Autowired
    DistanceBetweenAddressesCalculatorService distanceBetweenAddressesCalculatorService;

    @Override
    public ResponseEntity<?> getRestaurantResultsByLocationFromPublicPage(String userAddress, String restaurantSearchKeyword) {

        List<Restaurant> searchedRestaurant = restaurantRepository.findByrestaurantName(restaurantSearchKeyword);
        List<RestaurantSearchResults> restaurantResultsWithDetails = new ArrayList<>(searchedRestaurant.size());
        if(searchedRestaurant.size() == 0){
            SuccessMessage searchResultsWithZeroRest = new SuccessMessage(new Date(), "No restaurants matched your query");
            return new ResponseEntity<>(searchResultsWithZeroRest, HttpStatus.OK);
        }

        for(int i=0; i < searchedRestaurant.size(); i++){

            RestaurantSearchResults res = new RestaurantSearchResults();

            Restaurant currentRestaurant = searchedRestaurant.get(i);
            res.setRestaurantDetails(currentRestaurant);
            RestaurantRatings currentRestaurantRatings = restaurantRatingsRepository.findByrestaurantId(currentRestaurant.getRestaurantId());
            res.setRestaurantRatings(currentRestaurantRatings);
            distanceBetweenAddressesCalculatorService.calculateDistance(userAddress, res);
            restaurantResultsWithDetails.add(res);
        }

        return new ResponseEntity<>(restaurantResultsWithDetails, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> getRestaurantResultsByLocationFromDashboard(String userAddress, String userEmail, String restaurantSearchKeyword) {
        List<Restaurant> searchedRestaurant = restaurantRepository.findByrestaurantName(restaurantSearchKeyword);
        List<RestaurantSearchResults> restaurantResultsWithDetails = new ArrayList<>(searchedRestaurant.size());
        if(searchedRestaurant.size() == 0){
            SuccessMessage searchResultsWithZeroRest = new SuccessMessage(new Date(), "No restaurants matched your query");
            return new ResponseEntity<>(searchResultsWithZeroRest, HttpStatus.OK);
        }

        for(int i=0; i < searchedRestaurant.size(); i++){

            RestaurantSearchResults res = new RestaurantSearchResults();

            Restaurant currentRestaurant = searchedRestaurant.get(i);
            res.setRestaurantDetails(currentRestaurant);
            RestaurantRatings currentRestaurantRatings = restaurantRatingsRepository.findByrestaurantId(currentRestaurant.getRestaurantId());
            res.setRestaurantRatings(currentRestaurantRatings);
            Optional<UserRestaurantRatings> userRatingForRestaurant = userRestaurantRatingsRepository.findById(new UserRestaurantRatingsId(userEmail,currentRestaurant.getRestaurantId()));
            if(userRatingForRestaurant.isPresent())
                res.setUserRestaurantRatings(userRatingForRestaurant.get());

            distanceBetweenAddressesCalculatorService.calculateDistance(userAddress, res);
            restaurantResultsWithDetails.add(res);
        }

        return new ResponseEntity<>(restaurantResultsWithDetails, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> getAllRestaurantDetails(String userAddress) {
        return null;
    }

    @Override
    public ResponseEntity<?> getRestaurantResultsByRatings(String userAddress) {
        return null;
    }
}
