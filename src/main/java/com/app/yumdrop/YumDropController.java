package com.app.yumdrop;

import com.app.yumdrop.FormEntity.UsersDetails;
import com.app.yumdrop.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


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

    @RequestMapping(value = "/LoginDataForm",method = RequestMethod.POST)
    public void userLogin(@RequestBody  String userDataForm){
        System.out.println("inside");

        System.out.println(userDataForm);
    }




    @RequestMapping(value = "/userRegistration", method = RequestMethod.POST)
    public void userRegistration(@RequestBody String s){
        System.out.println("Inside user registration");
       System.out.println(s);
        //return ResponseEntity.ok().build();
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
