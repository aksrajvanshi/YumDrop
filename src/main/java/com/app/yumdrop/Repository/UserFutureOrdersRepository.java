package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.UserFutureOrders;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserFutureOrdersRepository extends CrudRepository<UserFutureOrders, String> {

    @Query(nativeQuery = true, value = "SELECT * FROM future_user_orders WHERE time between (now() - '5 min'::interval) or ('5 min'::interval - now()) or (now - '1 week'::interval)  ")
    List<UserFutureOrders> findByFutureOrder1Time();

}
