package com.app.yumdrop.Service;

import com.app.yumdrop.Entity.UserFutureOrders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface ScheduleOrderService {

    ResponseEntity<?> scheduleOrder(@RequestBody UserFutureOrders userFutureOrdersForm);

}
