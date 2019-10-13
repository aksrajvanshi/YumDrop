package com.app.yumdrop.Controller;

import com.app.yumdrop.FormEntity.UsersDetails;
import com.app.yumdrop.Service.SmsTwoFactorService;
import com.app.yumdrop.Service.UserRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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

    /**
     * Registers a user in the system.
     *
     * @param userDataForm
     * @return
     */
    @RequestMapping(value = "/userRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> userRegistration(@RequestBody UsersDetails userDataForm) {

        Random rnd = new Random();
        int number = rnd.nextInt(999999);

        smsTwoFactorService.send2FaCodeAsSms(userDataForm.getUser_phonenum(), String.format("%06d", number));
    //    return userRegistrationService.registerUser(userDataForm);
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
