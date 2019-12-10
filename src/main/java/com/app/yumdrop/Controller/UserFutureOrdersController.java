package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.UserFutureOrders;
import com.app.yumdrop.FormEntity.UserFutureOrdersForm;
import com.app.yumdrop.Repository.UserFutureOrdersRepository;

import com.app.yumdrop.Service.ScheduleOrderService;
import org.h2.api.TimestampWithTimeZone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalUnit;
import java.util.Calendar;
import java.util.List;
import java.util.TimeZone;

@ComponentScan
@Controller
public class UserFutureOrdersController {

    @Autowired
    private UserFutureOrdersRepository userFutureOrdersRepository;

    @Autowired
    private ScheduleOrderService scheduleOrderService;

    public UserFutureOrdersController(UserFutureOrdersRepository userFutureOrdersRepository, ScheduleOrderService scheduleOrderService) {
        this.userFutureOrdersRepository=userFutureOrdersRepository;
        this.scheduleOrderService = scheduleOrderService;
    }

    @RequestMapping(value="/scheduleOrderForUser", method=RequestMethod.POST)
    public ResponseEntity<?> scheduleOrderForUser(@RequestBody UserFutureOrdersForm userFutureOrdersForm) {

        return scheduleOrderService.scheduleOrder(userFutureOrdersForm);
    }

    public void runScheduler() {
        Timestamp start = Timestamp.from(Instant.now().minus(5, ChronoUnit.MINUTES));
        Timestamp end = Timestamp.from(Instant.now().plus(5, ChronoUnit.MINUTES));
        List<UserFutureOrders> orders = userFutureOrdersRepository
                .findByFutureOrder1TimeBetween(start, end);
        if(orders.size() > 0){
            System.out.println("id: " + orders.get(0).getOrderId());
        }else{
            System.out.println("No order to place");
        }
        System.out.println(" here 8");

    }



}