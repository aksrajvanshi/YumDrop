package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.UserFutureOrders;
import com.app.yumdrop.FormEntity.UserFutureOrdersForm;
import com.app.yumdrop.Repository.UserFutureOrdersRepository;
import com.app.yumdrop.Service.ScheduleOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class ScheduleOrderServiceImpl implements ScheduleOrderService {


    @Autowired
    private UserFutureOrdersRepository userFutureOrdersRepository;

    @Override
    public ResponseEntity<?> scheduleOrder(UserFutureOrdersForm userFutureOrdersForm) {

        UserFutureOrders futureOrder = new UserFutureOrders(userFutureOrdersForm.getOrderId(),userFutureOrdersForm.getEmail(),userFutureOrdersForm.getTime1(),userFutureOrdersForm.getRestaurantId(),userFutureOrdersForm.getOrderContents(),userFutureOrdersForm.getPrice());
        UserFutureOrders confirmedFutureOrder = userFutureOrdersRepository.save(futureOrder);
        return ResponseEntity.ok().body(confirmedFutureOrder);
    }
}
