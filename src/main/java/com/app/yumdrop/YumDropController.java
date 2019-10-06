package com.app.yumdrop;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Utils.PasswordUtils;
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
    public String loadInitialPublicPage() throws NoSuchAlgorithmException {

        String user = "akshay";
        String email = "aksrajvanshi@gmail.com";
        String password = "aksrajvanshi";
        userRepository.save(new Users(email, null, "8126508998",
                "+1", PasswordUtils.convertToHash(password), "SYSTEM",
                "SYSTEM"));

        return "index";
    }

}
