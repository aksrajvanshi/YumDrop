package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.ExceptionHandler.CustomExceptionHandler;
import com.app.yumdrop.FormEntity.UsersDetails;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Utils.PasswordUtils;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.ConstraintViolation;
import java.sql.SQLException;


@ComponentScan
@Controller
public class YumDropController {

    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private CustomExceptionHandler exceptionHandler;


    @RequestMapping(value = "/")
    public String loadInitialPublicPage() {

        String user = "akshay";
        String email = "aksrajvanshi@gmail.com";
        String password = "aksrajvanshi";

        return "index";
    }


    @RequestMapping(value = "/userRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> userRegistration(@RequestBody UsersDetails userDataForm){

        boolean userExistsBool = userRepository.existsById(userDataForm.getUser_email());

        if(userExistsBool){
            throw new ConstraintViolationException("User already exists", new SQLException(" Insert query"), "user_email");
        }

        Users userToRegister = new Users(userDataForm.getUser_email(), userDataForm.getUser_name(),
                userDataForm.getUser_phonenum(), "+1", PasswordUtils.convertToHash(userDataForm.getUserPassword()), "SYSTEM", "SYSTEM");

        userRepository.save(userToRegister);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/restaurantRegistration")
    public String testButton(@RequestBody String userDataForm) {
        System.out.println(userDataForm);

        return userDataForm;
    }


}
