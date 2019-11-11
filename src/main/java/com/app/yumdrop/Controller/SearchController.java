package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.SearchRestaurantName;
import com.app.yumdrop.FormEntity.SearchSuggestion;
import com.app.yumdrop.FormEntity.Restaurant;
import com.app.yumdrop.Repository.SearchRestaurantNameRepository;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@ComponentScan
@Controller

public class SearchController {

    @Autowired
    SearchRestaurantNameRepository repo;

    @RequestMapping(value = "/getQueryResults", method=RequestMethod.POST)
    public @ResponseBody List<Restaurant> getRestaurants(@RequestBody String givenSearchQuery) throws JSONException {
        Restaurant[] restaurants = {new Restaurant("https://thekatynews.com/wp-content/uploads/2017/06/mcdonalds-logo.jpg", "Burger King", new String[]{"Burgers", "Fast Food"}),
                new Restaurant("https://thekatynews.com/wp-content/uploads/2017/06/mcdonalds-logo.jpg", "Burger King", new String[]{"Borgers", "Fast food"})
        };
        JSONObject jo = new JSONObject(givenSearchQuery);
        System.out.println((String) jo.get("searchQuery"));
        List<SearchRestaurantName> searchResults = repo.findByrestaurantName((String) jo.get("searchQuery"));
        List<Restaurant> searchResultsFinal = new ArrayList<>();
        for (SearchRestaurantName current : searchResults) {
            searchResultsFinal.add(new Restaurant("https://thekatynews.com/wp-content/uploads/2017/06/mcdonalds-logo.jpg", current.getRestaurantName(), new String[]{"Borgers", "Fast food"}));
            System.out.println(current.getRestaurantName());
        }
        return searchResultsFinal;
    }

    @RequestMapping(value = "/getSearchSuggestions", method=RequestMethod.POST)
    public @ResponseBody List<SearchSuggestion> getSearchSuggestions(@RequestBody String givenSearchQuery) throws JSONException {
        JSONObject jo = new JSONObject(givenSearchQuery);
        System.out.println((String) jo.get("searchQuery"));
        List<SearchRestaurantName> searchResults = repo.findByrestaurantName((String) jo.get("searchQuery"));
        List<SearchSuggestion> searchSuggestions = new ArrayList<>();
        for (SearchRestaurantName current : searchResults) {
            searchSuggestions.add(new SearchSuggestion(current.getRestaurantName()));
        }
        //test
        return searchSuggestions;
    }

}
