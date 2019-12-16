package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.UserFutureOrders;
import com.app.yumdrop.Entity.UserOrder;
import com.app.yumdrop.Entity.UserOrderId;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.sql.Timestamp;
import java.util.List;

public interface UserFutureOrdersRepository extends CrudRepository<UserFutureOrders, UserOrderId> {

    @Query(value = "SELECT nextval('user_future_order_order_id_seq') FROM user_future_order_order_id_seq", nativeQuery =
            true)
    Long getNextSeriesId();

    List<UserFutureOrders> findByfutureOrderTimeBetween(Timestamp start, Timestamp end);

    void deleteByorderId(Long orderId);

}
