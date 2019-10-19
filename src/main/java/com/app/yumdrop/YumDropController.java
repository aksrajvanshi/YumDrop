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

import java.util.Random;


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

    @PostMapping(value = "/AgentRegistration")
    public String agentRegistration(@RequestBody String userDataForm) {
        System.out.println(userDataForm);

        return userDataForm;
    }

    @PostMapping(value = "/AgentRegistration")
    public String agentRegistration(@RequestBody String userDataForm) {
        System.out.println(userDataForm);

        return userDataForm;
    }


}
