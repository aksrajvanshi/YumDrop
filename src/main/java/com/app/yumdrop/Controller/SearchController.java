package com.app.yumdrop.Controller;

import com.app.yumdrop.FormEntity.SearchSuggestion;
import com.app.yumdrop.FormEntity.Restaurant;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;

@ComponentScan
@Controller

public class SearchController {

    @RequestMapping(value = "/getQueryResults", method=RequestMethod.POST)
    public @ResponseBody Restaurant[] getRestaurants(@RequestBody String givenSearchQuery) {
        Restaurant[] restaurants = {new Restaurant("https://thekatynews.com/wp-content/uploads/2017/06/mcdonalds-logo.jpg", "Burger King", new String[]{"Burgers", "Fast Food"}),
                new Restaurant("https://thekatynews.com/wp-content/uploads/2017/06/mcdonalds-logo.jpg", "Burger King", new String[]{"Borgers", "Fast food"})
        };
        return restaurants;
    }

    @RequestMapping(value = "/getSearchSuggestions", method=RequestMethod.POST)
    public @ResponseBody SearchSuggestion[] getSearchSuggestions(@RequestBody String givenSearchQuery) {
        SearchSuggestion[] searchSuggestions = new SearchSuggestion[] {new SearchSuggestion("apple"), new SearchSuggestion("pear")};
        String[] result = new String[] {"apple", "pear"};
        return searchSuggestions;
    }

}
