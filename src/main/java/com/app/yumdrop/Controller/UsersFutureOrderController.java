package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.UserFutureOrders;
import com.app.yumdrop.Entity.UserOrder;
import com.app.yumdrop.Entity.UserOrderId;
import com.app.yumdrop.Repository.UserFutureOrdersRepository;
import com.app.yumdrop.Repository.UserOrderRepository;
import com.app.yumdrop.Service.ScheduleOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

@ComponentScan
@Controller
public class UsersFutureOrderController {

    @Autowired
    ScheduleOrderService scheduleOrderService;

    @Autowired
    UserFutureOrdersRepository userFutureOrdersRepository;

    @Autowired
    UserOrderRepository userOrderRepository;

    @RequestMapping(value="/scheduleOrderForUser", method= RequestMethod.POST)
    public ResponseEntity<?> scheduleOrderForUser(@RequestBody UserFutureOrders userFutureOrdersForm) {

        return scheduleOrderService.scheduleOrder(userFutureOrdersForm);
    }

    public void runScheduler() {

        Timestamp start = Timestamp.from(Instant.now().minus(5, ChronoUnit.MINUTES));
        Timestamp end = Timestamp.from(Instant.now());

        List<UserFutureOrders> scheduledOrdersList = userFutureOrdersRepository.findByfutureOrderTimeBetween(start, end);

        for(int i=0; i < scheduledOrdersList.size(); i++){

            UserFutureOrders currentScheduledOrder = scheduledOrdersList.get(i);
            UserOrderId userOrderId = new UserOrderId(currentScheduledOrder.getUserEmail(), currentScheduledOrder.getRestaurantId());
            Long userOrderSequenceId = userOrderRepository.getNextSeriesId();
            UserOrder newUserOrder = new UserOrder(userOrderId, 1, currentScheduledOrder.getOrderContents(), userOrderSequenceId, currentScheduledOrder.getOrderPrice());
            userOrderRepository.save(newUserOrder);
        }

        for(int j=0; j < scheduledOrdersList.size(); j++){
            userFutureOrdersRepository.deleteByorderId(scheduledOrdersList.get(j).getOrderId());
        }


    }

}
