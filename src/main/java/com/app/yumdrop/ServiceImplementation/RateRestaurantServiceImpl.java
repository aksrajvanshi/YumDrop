package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.*;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.RestaurantRatingsRepository;
import com.app.yumdrop.Repository.RestaurantRepository;
import com.app.yumdrop.Repository.UserRestaurantRatingsRepository;
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
    UserRestaurantRatingsRepository userRestaurantRatingsRepository;

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    @Override
    public ResponseEntity<?> addRestaurantRating(UserRestaurantRatings userRestaurantRatings) {

        Users userInDb = usersRepository.findByuserEmail(userRestaurantRatings.getUserEmail());
        Restaurant restaurantInDb = restaurantRepository.findByrestaurantId(userRestaurantRatings.getRestaurantId());
        if (userInDb == null || restaurantInDb == null) {
            ErrorMessage userNotExist = new ErrorMessage(new Date(), "Invalid request", "");
            return new ResponseEntity<>(userNotExist, HttpStatus.UNAUTHORIZED);
        }

        Optional<UserRestaurantRatings> hasUserRatedRestaurant = userRestaurantRatingsRepository
                .findById(new UserRestaurantRatingsId(userRestaurantRatings.getUserEmail(),
                        userRestaurantRatings.getRestaurantId()));

        RestaurantRatings currentRestaurantRating = restaurantRatingsRepository
                .findByrestaurantId(userRestaurantRatings.getRestaurantId());

        if (hasUserRatedRestaurant != null && !hasUserRatedRestaurant.isPresent()) {
            UserRestaurantRatings userRatings = null;
            RestaurantRatings updatedRestaurantRatings = null;

            if (currentRestaurantRating != null) {
                userRatings = userRestaurantRatingsRepository.save(userRestaurantRatings);
                double overallRating = currentRestaurantRating.getOverallRating();
                int numUsers = currentRestaurantRating.getNumberOfUsers();

                overallRating += userRestaurantRatings.getRestaurantRating();
                numUsers += 1;
                updatedRestaurantRatings = restaurantRatingsRepository.save(
                        new RestaurantRatings(currentRestaurantRating.getRestaurantId(), overallRating, numUsers));
            } else {
                userRatings = userRestaurantRatingsRepository.save(userRestaurantRatings);
                updatedRestaurantRatings = restaurantRatingsRepository.save(new RestaurantRatings(
                        userRestaurantRatings.getRestaurantId(), userRestaurantRatings.getRestaurantRating(), 1));
            }

            if (userRatings != null && updatedRestaurantRatings != null) {
                SuccessMessage successfulRatingsSaved = new SuccessMessage(new Date(), "Ratings saved!");
                return new ResponseEntity<>(successfulRatingsSaved, HttpStatus.OK);
            } else {
                ErrorMessage ratingsError = new ErrorMessage(new Date(), "Ratings for this restaurants not saved", "");
                return new ResponseEntity<>(ratingsError, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        ErrorMessage ratingsError = new ErrorMessage(new Date(), "User has already rated the restaurant", "");
        return new ResponseEntity<>(ratingsError, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
