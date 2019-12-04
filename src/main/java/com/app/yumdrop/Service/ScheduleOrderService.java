package com.app.yumdrop.Service;

import com.app.yumdrop.FormEntity.DeliveryAgentRegisterForm;
import com.app.yumdrop.FormEntity.UserFutureOrdersForm;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface ScheduleOrderService {

    ResponseEntity<?> scheduleOrder(@RequestBody UserFutureOrdersForm userFutureOrdersForm);

}