package com.app.yumdrop.Controller;

import com.app.yumdrop.FormEntity.UsersDetails;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Service.SmsTwoFactorService;
import com.app.yumdrop.Service.UserRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Random;

@ComponentScan
@Controller
public class RegistrationController {

    @Autowired
    UserRegistrationService userRegistrationService;

    @Autowired
    SmsTwoFactorService smsTwoFactorService;

    @Autowired
    private UsersRepository userRepository;

    @RequestMapping(value = "/userRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> userRegistration(@RequestBody UsersDetails usersDetails) {

        boolean userExists = userRepository.existsById(usersDetails.getUser_email());

        if (userExists) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Random rnd = new Random();
        int number = rnd.nextInt(999999);
        boolean messageSent = smsTwoFactorService.send2FaCodeAsSms(usersDetails.getUser_email(), usersDetails.getUser_phonenum(), String.format("%06d", number));
        if (messageSent) {
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
