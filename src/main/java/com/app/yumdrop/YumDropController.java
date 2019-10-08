package com.app.yumdrop;

import com.app.yumdrop.FormEntity.UsersDetails;
import com.app.yumdrop.Repository.UsersRepository;
//import jdk.nashorn.internal.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


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


    @PostMapping(value = "/userRegistration")
    public String userRegistration(@RequestBody UsersDetails userDataForm){

        System.out.println(userDataForm.getUser_email());
        return "index";
    }

    @PostMapping(value = "/restaurantRegistration")
    public String testButton(@RequestBody String userDataForm) {
        System.out.println(userDataForm);

        return userDataForm;
    }


}
