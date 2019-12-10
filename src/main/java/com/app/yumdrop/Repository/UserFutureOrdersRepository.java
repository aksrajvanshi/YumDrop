package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.UserFutureOrders;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.sql.Timestamp;
import java.util.List;

public interface UserFutureOrdersRepository extends CrudRepository<UserFutureOrders, String> {

    List<UserFutureOrders> findByFutureOrder1TimeBetween(Timestamp start, Timestamp end);
    void removeByOrderId(String id);
    void delete(UserFutureOrders userFutureOrders);
    void deleteByOrderId(String id);


}
