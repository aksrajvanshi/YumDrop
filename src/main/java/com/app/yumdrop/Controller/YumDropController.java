package com.app.yumdrop.Controller;

import com.app.yumdrop.FormEntity.UsersDetails;
import com.app.yumdrop.Service.UserRegistrationService;
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
    UserRegistrationService userRegistrationService;

    /**
     * Loads the initial public page of the Yumdrop application
     *
     * @return
     */
    @RequestMapping(value = "/")
    public String loadInitialPublicPage() {

        return "index";
    }

    /**
     * Registers a user in the system.
     *
     * @param userDataForm
     * @return
     */
    @RequestMapping(value = "/userRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> userRegistration(@RequestBody UsersDetails userDataForm) {

        return userRegistrationService.registerUser(userDataForm);
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
