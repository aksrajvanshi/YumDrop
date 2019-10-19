package com.app.yumdrop.Controller;
import com.app.yumdrop.FormEntity.UsersDetails;
import com.app.yumdrop.Service.SmsTwoFactorService;
import com.app.yumdrop.Service.UserRegistrationService;
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
    UserRegistrationService userRegistrationService;

    @Autowired
    SmsTwoFactorService smsTwoFactorService;

    /**
     * Loads the initial public page of the Yumdrop application
     *
     * @return
     */
    @RequestMapping(value = "/")
    public String loadInitialPublicPage() {

        return "index";
    }
  
    @RequestMapping(value = "/LoginDataForm",method = RequestMethod.POST)
    public ResponseEntity<?> userLogin(@RequestBody String userDataForm) {
        System.out.println("inside");

        System.out.println(userDataForm);
        System.out.println(HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/tryGetData")
    public ResponseEntity<?> trying() throws JSONException {
        String jsonString = new JSONObject()
                .put("userName", "Hello World!").toString();
        System.out.println(jsonString);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/userRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> userRegistration(@RequestBody UsersDetails usersDetails){
        System.out.println(" fxvdf " + usersDetails.getUser_name() + "  sdfsd " + usersDetails.getUser_email());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * registers a restaurant in the system.
     *
     * @param restaurantDataForm
     * @return
     */
    @PostMapping(value = "/restaurantRegistration")
    public String restaurantRegistration(@RequestBody String restaurantDataForm) {
        System.out.println(restaurantDataForm);

        return restaurantDataForm;
    }

}
