package com.app.yumdrop.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class SchedulerController {


    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    @Autowired
    private UsersFutureOrderController userFutureOrdersController;

    public SchedulerController(UsersFutureOrderController userFutureOrdersController) {
        this.userFutureOrdersController = userFutureOrdersController;
    }

    @Scheduled(fixedRate = 60000)
    public void reportCurrentTime() {
        System.out.println("Time : " + dateFormat.format(new Date()));
        userFutureOrdersController.runScheduler();
    }
}