package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.RestaurantCountPerRating;
import com.app.yumdrop.Entity.RestaurantRatings;
import com.app.yumdrop.FormEntity.RestaurantSearchResults;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.RestaurantCountPerRatingRepository;
import com.app.yumdrop.Repository.RestaurantRatingsRepository;
import com.app.yumdrop.Repository.RestaurantRepository;
import com.app.yumdrop.Service.DistanceBetweenAddressesCalculatorService;
import com.app.yumdrop.Service.RestaurantSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RestaurantSearchServiceImpl implements RestaurantSearchService {

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    RestaurantRatingsRepository restaurantRatingsRepository;

    @Autowired
    DistanceBetweenAddressesCalculatorService distanceBetweenAddressesCalculatorService;

    @Autowired
    RestaurantCountPerRatingRepository restaurantCountPerRatingRepository;

    @Override
    public ResponseEntity<?> getRestaurantResultsByLocationFromPublicPage(String userAddress, String restaurantSearchKeyword, Double minimumRating, int maximumDistance) {
        List<Restaurant> searchedRestaurant = restaurantRepository.findByrestaurantName(restaurantSearchKeyword);
        List<RestaurantSearchResults> restaurantResultsWithDetails = new ArrayList<>(searchedRestaurant.size());
        if (searchedRestaurant.size() == 0) {
            SuccessMessage searchResultsWithZeroRest = new SuccessMessage(new Date(), "No restaurants matched your query");
            return new ResponseEntity<>(searchResultsWithZeroRest, HttpStatus.OK);
        }

        for (int i = 0; i < searchedRestaurant.size(); i++) {

            RestaurantSearchResults res = new RestaurantSearchResults();

            Restaurant currentRestaurant = searchedRestaurant.get(i);
            res.setRestaurantDetails(currentRestaurant);
            RestaurantRatings currentRestaurantRatings = restaurantRatingsRepository.findByrestaurantId(currentRestaurant.getRestaurantId());
            res.setRestaurantRatings(currentRestaurantRatings);
            List<RestaurantCountPerRating> restaurantCountPerRatings = restaurantCountPerRatingRepository.findByrestaurantId(currentRestaurant.getRestaurantId());
            res.setRestaurantCountPerRatingList(restaurantCountPerRatings);
            distanceBetweenAddressesCalculatorService.calculateDistance(userAddress, res);
            restaurantResultsWithDetails.add(res);
        }

        restaurantResultsWithDetails.sort(Comparator.comparing(RestaurantSearchResults::getDistanceFromUserInMeters));
        List<RestaurantSearchResults> finalSearchResults = new ArrayList<>();
        for(int i=0; i < restaurantResultsWithDetails.size(); i++){
            RestaurantSearchResults restaurantDetail = restaurantResultsWithDetails.get(i);
            Double restaurantRating = (1.0) * restaurantDetail.getRestaurantRatings().getOverallRating()/restaurantDetail.getRestaurantRatings().getNumberOfUsers();
            if(restaurantDetail.getDistanceFromUserInMeters() < (maximumDistance * 1600) && restaurantRating > minimumRating){
                finalSearchResults.add(restaurantDetail);
            }

        }

        return new ResponseEntity<>(finalSearchResults, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> getRestaurantResultsByLocationFromDashboard(String userAddress, String userEmail, String restaurantSearchKeyword, Double minimumRating, int maximumDistance) {
        List<Restaurant> searchedRestaurant = restaurantRepository.findByrestaurantName(restaurantSearchKeyword);
        List<RestaurantSearchResults> restaurantResultsWithDetails = new ArrayList<>(searchedRestaurant.size());
        if (searchedRestaurant.size() == 0) {
            SuccessMessage searchResultsWithZeroRest = new SuccessMessage(new Date(), "No restaurants matched your query");
            return new ResponseEntity<>(searchResultsWithZeroRest, HttpStatus.OK);
        }

        for (int i = 0; i < searchedRestaurant.size(); i++) {

            RestaurantSearchResults res = new RestaurantSearchResults();

            Restaurant currentRestaurant = searchedRestaurant.get(i);
            res.setRestaurantDetails(currentRestaurant);
            RestaurantRatings currentRestaurantRatings = restaurantRatingsRepository.findByrestaurantId(currentRestaurant.getRestaurantId());
            res.setRestaurantRatings(currentRestaurantRatings);
            List<RestaurantCountPerRating> restaurantCountPerRatings = restaurantCountPerRatingRepository.findByrestaurantId(currentRestaurant.getRestaurantId());
            res.setRestaurantCountPerRatingList(restaurantCountPerRatings);
            distanceBetweenAddressesCalculatorService.calculateDistance(userAddress, res);
            restaurantResultsWithDetails.add(res);
        }
        restaurantResultsWithDetails.sort(Comparator.comparing(RestaurantSearchResults::getDistanceFromUserInMeters));
        List<RestaurantSearchResults> finalSearchResults = new ArrayList<>();
        for(int i=0; i < restaurantResultsWithDetails.size(); i++){
            RestaurantSearchResults restaurantDetail = restaurantResultsWithDetails.get(i);
            Double restaurantRating = (1.0) * restaurantDetail.getRestaurantRatings().getOverallRating()/restaurantDetail.getRestaurantRatings().getNumberOfUsers();
            if(restaurantDetail.getDistanceFromUserInMeters() < (maximumDistance * 1600) && restaurantRating > minimumRating){
                finalSearchResults.add(restaurantDetail);
            }

        }

        return new ResponseEntity<>(finalSearchResults, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> getAllRestaurantDetails(String userAddress) {
        List<Restaurant> searchedRestaurant = (List<Restaurant>) restaurantRepository.findAll();
        List<RestaurantSearchResults> restaurantResultsWithDetails = new ArrayList<>(searchedRestaurant.size());
        if (searchedRestaurant.size() == 0) {
            SuccessMessage searchResultsWithZeroRest = new SuccessMessage(new Date(), "No restaurants matched your query");
            return new ResponseEntity<>(searchResultsWithZeroRest, HttpStatus.OK);
        }

        for (int i = 0; i < searchedRestaurant.size(); i++) {

            RestaurantSearchResults res = new RestaurantSearchResults();

            Restaurant currentRestaurant = searchedRestaurant.get(i);
            res.setRestaurantDetails(currentRestaurant);
            RestaurantRatings currentRestaurantRatings = restaurantRatingsRepository.findByrestaurantId(currentRestaurant.getRestaurantId());
            res.setRestaurantRatings(currentRestaurantRatings);
            List<RestaurantCountPerRating> restaurantCountPerRatings = restaurantCountPerRatingRepository.findByrestaurantId(currentRestaurant.getRestaurantId());
            res.setRestaurantCountPerRatingList(restaurantCountPerRatings);
            distanceBetweenAddressesCalculatorService.calculateDistance(userAddress, res);
            restaurantResultsWithDetails.add(res);
        }

        restaurantResultsWithDetails.sort(Comparator.comparing(RestaurantSearchResults::getDistanceFromUserInMeters));
        return new ResponseEntity<>(restaurantResultsWithDetails, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> getRestaurantResultsByRatings(String userAddress){

        List<Restaurant> searchedRestaurant = (List<Restaurant>) restaurantRepository.findAll();
        List<RestaurantSearchResults> restaurantResultsWithDetails = new ArrayList<>(searchedRestaurant.size());
        if (searchedRestaurant.size() == 0) {
            SuccessMessage searchResultsWithZeroRest = new SuccessMessage(new Date(), "No restaurants matched your query");
            return new ResponseEntity<>(searchResultsWithZeroRest, HttpStatus.OK);
        }

        for (int i = 0; i < searchedRestaurant.size(); i++) {

            RestaurantSearchResults res = new RestaurantSearchResults();

            Restaurant currentRestaurant = searchedRestaurant.get(i);
            res.setRestaurantDetails(currentRestaurant);
            RestaurantRatings currentRestaurantRatings = restaurantRatingsRepository.findByrestaurantId(currentRestaurant.getRestaurantId());
            res.setRestaurantRatings(currentRestaurantRatings);
            List<RestaurantCountPerRating> restaurantCountPerRatings = restaurantCountPerRatingRepository.findByrestaurantId(currentRestaurant.getRestaurantId());
            res.setRestaurantCountPerRatingList(restaurantCountPerRatings);
            distanceBetweenAddressesCalculatorService.calculateDistance(userAddress, res);
            restaurantResultsWithDetails.add(res);
        }

        Collections.sort(restaurantResultsWithDetails, new Comparator<RestaurantSearchResults>() {
            @Override
            public int compare(RestaurantSearchResults u1, RestaurantSearchResults u2) {

                double rating1 = u1.getRestaurantRatings().getOverallRating() / u1.getRestaurantRatings().getNumberOfUsers();
                double rating2 = u2.getRestaurantRatings().getOverallRating() / u2.getRestaurantRatings().getNumberOfUsers();

                return Double.compare(rating1, rating2);
            }
        });

        return new ResponseEntity<>(restaurantResultsWithDetails, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> getSingleRestaurantDetail(String restaurantId) {
        Restaurant restaurantDetail = restaurantRepository.findByrestaurantId(restaurantId);
        RestaurantSearchResults restaurantSearchResults = new RestaurantSearchResults();

        restaurantSearchResults.setRestaurantDetails(restaurantDetail);
        RestaurantRatings currentRestaurantRatings = restaurantRatingsRepository.findByrestaurantId(restaurantDetail.getRestaurantId());
        restaurantSearchResults.setRestaurantRatings(currentRestaurantRatings);
        List<RestaurantCountPerRating> restaurantCountPerRatings = restaurantCountPerRatingRepository.findByrestaurantId(restaurantDetail.getRestaurantId());
        restaurantSearchResults.setRestaurantCountPerRatingList(restaurantCountPerRatings);

        return new ResponseEntity<>(restaurantSearchResults, HttpStatus.OK);
    }
}