package com.app.yumdrop;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

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

    @RequestMapping(path= "/fbUserLogin", method = RequestMethod.POST)
    @CrossOrigin
    public String addfbUser(@RequestBody Users user) {

        user.setUserPhoneNumber("0000000000");
        user.setUserCountryCode("1");
        user.setLastCreatedUser("admin");
        user.setLastUpdatedUser("admin");
        user.setUserPassword("admin");
        Users u = userRepository.findUsersByUserEmail(user.getUserEmail());
        return "success";
    }
}
