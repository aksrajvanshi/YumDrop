package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.*;
import com.app.yumdrop.FormEntity.RestaurantSearchResults;
import com.app.yumdrop.Repository.*;
import com.app.yumdrop.Service.DistanceBetweenAddressesCalculatorService;
import com.app.yumdrop.Service.RestaurantRecommendationService;
import com.app.yumdrop.Service.RestaurantSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RestaurantRecommendationServiceImpl implements RestaurantRecommendationService {

    @Autowired
    UserOrderRepository userOrderRepository;

    @Autowired
    RestaurantSearchService restaurantSearchService;

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    RestaurantRatingsRepository restaurantRatingsRepository;

    @Autowired
    RestaurantCountPerRatingRepository restaurantCountPerRatingRepository;

    @Autowired
    DistanceBetweenAddressesCalculatorService distanceBetweenAddressesCalculatorService;

    @Override
    public ResponseEntity<?> getRecommendedRestaurants(String userEmail) {

        List<UserOrder> userOrders = userOrderRepository.findByuserEmail(userEmail);
        Users userDetail = usersRepository.findByuserEmail(userEmail);
        List<RestaurantSearchResults> finalRecommendations = new ArrayList<>();
        List<RestaurantSearchResults> restaurantSearchResults = restaurantSearch(userDetail);
        if (userOrders.size() == 0) {

            for (int i = 0; i < 3; i++) {
                finalRecommendations.add(restaurantSearchResults.get(i));
            }
            return new ResponseEntity<>(finalRecommendations, HttpStatus.OK);
        } else {

            Set<Integer> randomIntegerSet = new HashSet<>();
            int size = restaurantSearchResults.size();
            Random random = new Random();
            while (randomIntegerSet.size() < 3) {
                randomIntegerSet.add(random.nextInt(size));
            }

            for (int nums : randomIntegerSet) {
                finalRecommendations.add(restaurantSearchResults.get(nums));
            }

            return new ResponseEntity<>(finalRecommendations, HttpStatus.OK);
        }

    }


    public List<RestaurantSearchResults> restaurantSearch(Users userDetail) {
        List<Restaurant> searchedRestaurant = (List<Restaurant>) restaurantRepository.findAll();
        List<RestaurantSearchResults> restaurantResultsWithDetails = new ArrayList<>(searchedRestaurant.size());

        for (int i = 0; i < searchedRestaurant.size(); i++) {

            RestaurantSearchResults res = new RestaurantSearchResults();

            Restaurant currentRestaurant = searchedRestaurant.get(i);
            res.setRestaurantDetails(currentRestaurant);
            RestaurantRatings currentRestaurantRatings = restaurantRatingsRepository.findByrestaurantId(currentRestaurant.getRestaurantId());
            res.setRestaurantRatings(currentRestaurantRatings);
            List<RestaurantCountPerRating> restaurantCountPerRatings = restaurantCountPerRatingRepository.findByrestaurantId(currentRestaurant.getRestaurantId());
            res.setRestaurantCountPerRatingList(restaurantCountPerRatings);
            distanceBetweenAddressesCalculatorService.calculateDistance(userDetail.getUserAddress(), res);
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

        return restaurantResultsWithDetails;
    }


}
