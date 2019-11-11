package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.SearchRestaurantName;
import org.hibernate.annotations.Parameter;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SearchRestaurantNameRepository extends CrudRepository<SearchRestaurantName, String> {

    @Query(nativeQuery = true, value = "SELECT * FROM restaurant_main WHERE LOWER(restaurant_name) LIKE LOWER('%' || ?1 || '%')")
    List<SearchRestaurantName> findByrestaurantName(String givenRestaurantName);

}

