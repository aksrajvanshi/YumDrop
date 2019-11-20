package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.*;
import com.app.yumdrop.FormEntity.RestaurantRating;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.RestaurantCountPerRatingRepository;
import com.app.yumdrop.Repository.RestaurantRatingsRepository;
import com.app.yumdrop.Repository.RestaurantRepository;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Service.RateRestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class RateRestaurantServiceImpl implements RateRestaurantService {

    @Autowired
    RestaurantRatingsRepository restaurantRatingsRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    RestaurantCountPerRatingRepository restaurantCountPerRatingRepository;

    @Override
    public ResponseEntity<?> addRestaurantRating(RestaurantRating restaurantRating) {

        Restaurant restaurantInDb = restaurantRepository.findByrestaurantId(restaurantRating.getRestaurantId());
        if (restaurantInDb == null) {
            ErrorMessage userNotExist = new ErrorMessage(new Date(), "Invalid request",
                    "");
            return new ResponseEntity<>(userNotExist, HttpStatus.UNAUTHORIZED);
        }

        RestaurantRatings currentRestaurantRating = restaurantRatingsRepository.findByrestaurantId(
                restaurantRating.getRestaurantId());

        if (currentRestaurantRating != null) {
            RestaurantRatings updatedRestaurantRatings = null;

            if (currentRestaurantRating != null) {

                int overallRating = currentRestaurantRating.getOverallRating();
                int numUsers = currentRestaurantRating.getNumberOfUsers();

                overallRating += restaurantRating.getRestaurantRating();
                numUsers += 1;
                updatedRestaurantRatings = restaurantRatingsRepository.save(
                        new RestaurantRatings(currentRestaurantRating.getRestaurantId(), overallRating, numUsers));

                Optional<RestaurantCountPerRating> restaurantCountforCurrentRating = restaurantCountPerRatingRepository.findById(
                        new RestaurantCountPerRatingId(restaurantRating.getRestaurantId(), restaurantRating.getRestaurantRating()));

                if(restaurantCountforCurrentRating.isPresent()) {
                    int countForCurrentRating = restaurantCountforCurrentRating.get().getRatingCount();
                    countForCurrentRating++;
                    restaurantCountPerRatingRepository.save(new RestaurantCountPerRating(restaurantRating.getRestaurantId(), restaurantRating.getRestaurantRating(), countForCurrentRating));
                }
            }

            if (updatedRestaurantRatings != null) {
                SuccessMessage successfulRatingsSaved = new SuccessMessage(new Date(), "Ratings saved!");
                return new ResponseEntity<>(successfulRatingsSaved, HttpStatus.OK);
            } else {
                ErrorMessage ratingsError = new ErrorMessage(new Date(), "Ratings for this restaurants not saved",
                        "");
                return new ResponseEntity<>(ratingsError, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        ErrorMessage ratingsError = new ErrorMessage(new Date(), "User has already rated the restaurant",
                "");
        return new ResponseEntity<>(ratingsError, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
