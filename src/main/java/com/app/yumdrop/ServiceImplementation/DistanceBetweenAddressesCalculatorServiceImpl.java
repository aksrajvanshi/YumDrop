package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.FormEntity.RestaurantSearchResults;
import com.app.yumdrop.Service.DistanceBetweenAddressesCalculatorService;
import com.google.maps.DirectionsApi;
import com.google.maps.DistanceMatrixApi;
import com.google.maps.DistanceMatrixApiRequest;
import com.google.maps.GeoApiContext;
import com.google.maps.errors.ApiException;
import com.google.maps.model.DistanceMatrix;
import com.google.maps.model.TravelMode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class DistanceBetweenAddressesCalculatorServiceImpl implements DistanceBetweenAddressesCalculatorService {

    @Value("${google.maps.distanceapi.key}")
    String googleMapsAPIKey;

    @Override
    public void calculateDistance(String userAddress, RestaurantSearchResults restaurantSearchResults) {

        GeoApiContext context = new GeoApiContext.Builder()
                .apiKey(googleMapsAPIKey)
                .build();
        DistanceMatrixApiRequest req = DistanceMatrixApi.newRequest(context);
        DistanceMatrix result = null;
        try {
            result = req.origins(userAddress)
                    .destinations(restaurantSearchResults.getRestaurantDetails().getRestaurantAddress())
                    .mode(TravelMode.DRIVING)
                    .avoid(DirectionsApi.RouteRestriction.TOLLS)
                    .language("en-US")
                    .await();
        } catch (ApiException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        restaurantSearchResults.setDistanceFromUserInMeters(result.rows[0].elements[0].distance.inMeters);
        restaurantSearchResults.setDistanceFromUserWithMetrics(result.rows[0].elements[0].distance.humanReadable);

    }

    @Override
    public long calculateDistanceBetweenDeliveryAgentAndRestaurant(String restaurantAddress, String deliveryAgentAddress){
        GeoApiContext context = new GeoApiContext.Builder()
                .apiKey(googleMapsAPIKey)
                .build();
        DistanceMatrixApiRequest req = DistanceMatrixApi.newRequest(context);
        DistanceMatrix result = null;
        try {
            result = req.origins(restaurantAddress)
                    .destinations(deliveryAgentAddress)
                    .mode(TravelMode.DRIVING)
                    .avoid(DirectionsApi.RouteRestriction.TOLLS)
                    .language("en-US")
                    .await();
        } catch (ApiException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return result.rows[0].elements[0].distance.inMeters;
    }

}
