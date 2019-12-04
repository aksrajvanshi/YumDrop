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

    @RequestMapping(value = "/UserFutureOrderForm", method = RequestMethod.POST)
    public ResponseEntity<?> userFutureOrders(@RequestBody UserFutureOrdersForm userFutureOrdersForm) {

        UserFutureOrders order = userFutureOrdersRepository.findByOrderId("3");
        if (order == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        else if (order.userEmail.equals(userFutureOrdersForm.getEmail())) {
            System.out.println("user email : "+order.userEmail);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

}
