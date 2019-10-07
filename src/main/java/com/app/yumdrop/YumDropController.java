package com.app.yumdrop;

import com.app.yumdrop.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.NoSuchAlgorithmException;


@ComponentScan
@Controller
public class YumDropController {

    @Autowired
    private UsersRepository userRepository;


    @RequestMapping(value = "/")
    public String loadInitialPublicPage() {

        String user = "akshay";
        String email = "aksrajvanshi@gmail.com";
        String password = "aksrajvanshi";

        return "index";
    }

}
