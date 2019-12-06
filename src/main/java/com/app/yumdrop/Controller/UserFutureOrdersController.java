package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.UserFutureOrders;
import com.app.yumdrop.FormEntity.UserFutureOrdersForm;
import com.app.yumdrop.Repository.UserFutureOrdersRepository;

import com.app.yumdrop.Service.ScheduleOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@ComponentScan
@Controller
public class UserFutureOrdersController {

    @Autowired
    private UserFutureOrdersRepository userFutureOrdersRepository;

    @Autowired
    private ScheduleOrderService scheduleOrderService;

    @RequestMapping(value="/scheduleOrderForUser", method=RequestMethod.POST)
    public ResponseEntity<?> scheduleOrderForUser(@RequestBody UserFutureOrdersForm userFutureOrdersForm) {

            return scheduleOrderService.scheduleOrder(userFutureOrdersForm);
    }

    public void runScheduler() {
        System.out.println(" here 0");

            System.out.println(" here 4");
            List<UserFutureOrders> orders = userFutureOrdersRepository.findByFutureOrder1Time();
            System.out.println(" here 5");
            if(orders.get(0)==null) System.out.println(" Null here 1");
            System.out.println(" here 6");
            System.out.println(" Order Details Email "+orders.get(0).getUserEmail());
            System.out.println(" here 7");
            if(orders.get(0).getFutureOrder1Time().equals("2019-12-02 23:55:00+00")) {
                System.out.println(" Time match ");
            }
            System.out.println(" here 8");

    }



}
