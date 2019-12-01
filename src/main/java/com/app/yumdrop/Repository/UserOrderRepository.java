package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.UserOrder;
import com.app.yumdrop.Entity.UserOrderId;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserOrderRepository extends CrudRepository<UserOrder, UserOrderId> {

    @Query(value = "SELECT nextval('user_order_table_order_id_seq') FROM user_order_table_order_id_seq", nativeQuery =
            true)
    Long getNextSeriesId();

    List<UserOrder> findByuserEmail(String userEmail);

    List<UserOrder> findByrestaurantId(String restaurantId);

}
