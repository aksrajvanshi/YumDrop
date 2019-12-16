package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.UserFutureOrders;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.UserFutureOrdersRepository;
import com.app.yumdrop.Service.ScheduleOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ScheduleOrderServiceImpl implements ScheduleOrderService {

    @Autowired
    private UserFutureOrdersRepository userFutureOrdersRepository;

    @Override
    public ResponseEntity<?> scheduleOrder(UserFutureOrders userFutureOrdersForm) {
        Long orderId = userFutureOrdersRepository.getNextSeriesId();

        UserFutureOrders futureOrder = new UserFutureOrders(userFutureOrdersForm.getUserEmail(), orderId, userFutureOrdersForm.getFutureOrderTime(),
                userFutureOrdersForm.getRestaurantId(), userFutureOrdersForm.getOrderContents(), userFutureOrdersForm.getOrderPrice());

        UserFutureOrders userFutureOrder = userFutureOrdersRepository.save(futureOrder);
        if(userFutureOrder!= null){

            SuccessMessage orderScheduled = new SuccessMessage(new Date(), "Your order is scheduled successfully!");
            return new ResponseEntity<>(orderScheduled, HttpStatus.OK);
        }
        ErrorMessage orderNotSet = new ErrorMessage(new Date(), "Order could not be processed!",
                "");
        return new ResponseEntity<>(orderNotSet, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
