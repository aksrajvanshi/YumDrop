package com.app.yumdrop.Controller;

import com.app.yumdrop.FormEntity.ForgotPasswordForm;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.security.Principal;

@ComponentScan
@Controller
@RequestMapping(value = "/user")
public class FacebookOAuthController {

    @GetMapping
    public Principal getUser(Principal user){
        return user;
    }


}
