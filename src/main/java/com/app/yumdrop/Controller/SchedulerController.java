package com.app.yumdrop.Controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import com.app.yumdrop.Controller.UserFutureOrdersController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class SchedulerController {



    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
    @Autowired
    private UserFutureOrdersController userFutureOrdersController;

    public SchedulerController(UserFutureOrdersController userFutureOrdersController){
        this.userFutureOrdersController = userFutureOrdersController;
    }



    @Scheduled(fixedRate = 20000)
    public void reportCurrentTime() {
        System.out.println("Time : "+ dateFormat.format(new Date()));
        System.out.println(" here 3");
        userFutureOrdersController.runScheduler();
        System.out.println(" here 2");
    }
}
