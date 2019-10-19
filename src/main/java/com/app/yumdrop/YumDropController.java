package com.app.yumdrop;

import com.app.yumdrop.FormEntity.UsersDetails;
import com.app.yumdrop.Repository.UsersRepository;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
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
    public String userLogin(@RequestBody  String userDataForm) {
        System.out.println("inside");

        System.out.println(userDataForm);
        System.out.println(HttpStatus.OK);
        return "Hello";
    }

    @GetMapping(value = "/tryGetData")
    public ResponseEntity<?> trying() throws JSONException {
        String jsonString = new JSONObject()
                .put("userName", "Hello World!").toString();
        System.out.println(jsonString);

        return ResponseEntity.ok(404);
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
