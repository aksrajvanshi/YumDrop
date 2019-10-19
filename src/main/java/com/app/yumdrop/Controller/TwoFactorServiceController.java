package com.app.yumdrop.Controller;

import com.app.yumdrop.Service.SmsTwoFactorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@ComponentScan
@Controller
public class TwoFactorServiceController {

    @Autowired
    SmsTwoFactorService smsTwoFactorService;

    @RequestMapping(value = "/users/{emailId}/phonenum/{phonenumber}/2fa", method = RequestMethod.POST)
    public ResponseEntity<?> sendCodeOnPhone(@PathVariable("emailId") String emailId, @PathVariable("phonenumber") String mobileNumber){

        String twoFactorCode = "";
        smsTwoFactorService.send2FaCodeAsSms(mobileNumber, twoFactorCode);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
