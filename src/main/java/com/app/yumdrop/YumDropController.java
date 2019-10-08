package com.app.yumdrop;

import com.app.yumdrop.FormEntity.UsersDetails;
import com.app.yumdrop.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


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


    @RequestMapping(value = "/userRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> userRegistration(@RequestBody UsersDetails userDataForm){

        System.out.println(userDataForm.getUser_email());
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/restaurantRegistration")
    public String testButton(@RequestBody String userDataForm) {
        System.out.println(userDataForm);

        return userDataForm;
    }

    @PostMapping(value = "/AgentRegistration")
    public String agentRegistration(@RequestBody String userDataForm) {
        System.out.println(userDataForm);

        return userDataForm;
    }


}
