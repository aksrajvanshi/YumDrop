package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.RestaurantManager;
import com.app.yumdrop.FormEntity.RestaurantRegisterForm;
import com.app.yumdrop.Repository.RestaurantManagerRepository;
import com.app.yumdrop.Repository.RestaurantRepository;
import com.app.yumdrop.Service.RestaurantRegistrationService;
import com.app.yumdrop.Utils.PasswordUtils;
import com.sendgrid.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Random;

@Service
public class RestaurantRegistrationServiceImpl implements RestaurantRegistrationService {

    @Autowired
    public JavaMailSender javaMailSender;

    @Autowired
    public RestaurantManagerRepository restaurantManagerRepository;

    @Autowired
    public RestaurantRepository restaurantRepository;

    @Value("${sendgrid.api.key}")
    String sendGridAPIKey;

    @Override
    public ResponseEntity<?> registerRestaurant(RestaurantRegisterForm restaurantRegisterForm) {

        boolean primaryManagerEmailSent = sendMailWithTemporaryPasswordToRestaurantManager(restaurantRegisterForm.getRestaurantId(), restaurantRegisterForm.getRestaurantPrimaryEmailId());
        System.out.println(" primary Manager Email Sent " + primaryManagerEmailSent);
        boolean secondaryManagerEmailSent = sendMailWithTemporaryPasswordToRestaurantManager(restaurantRegisterForm.getRestaurantId(), restaurantRegisterForm.getRestaurantSecondaryEmailId());
        System.out.println(" secondary Manager Email Sent " + secondaryManagerEmailSent);

        if (primaryManagerEmailSent && secondaryManagerEmailSent) {
            Restaurant newRestaurantRegister = new Restaurant(restaurantRegisterForm.getRestaurantId(), restaurantRegisterForm.getRestaurantName(), restaurantRegisterForm.getRestaurantPrimaryEmailId(),
                    restaurantRegisterForm.getRestaurantSecondaryEmailId(), restaurantRegisterForm.getPrimaryPhoneNumber(), restaurantRegisterForm.getSecondaryPhoneNumber());
            Restaurant registeredRestaurant = restaurantRepository.save(newRestaurantRegister);
            if(registeredRestaurant == null){
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }

        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

        return ResponseEntity.status(HttpStatus.OK).build();
    }


    public boolean sendMailWithTemporaryPasswordToRestaurantManager(String restaurantId, String restaurantManagerEmail) {

        List<RestaurantManager> managerExistsInDb = restaurantManagerRepository.findByrestaurantId(restaurantId);
        boolean doesManagerExist = false;
        System.out.println(managerExistsInDb + " -- " + managerExistsInDb.size() + " -- " + restaurantManagerEmail);
        if (managerExistsInDb.size() != 0) {
            for (int i = 0; i < managerExistsInDb.size(); i++) {
                if (managerExistsInDb.get(i).getRestaurantManagerEmailId().equals(restaurantManagerEmail)) {
                    doesManagerExist = true;
                    break;
                }
            }
        }

        System.out.println(doesManagerExist);

        if (!doesManagerExist) {
            String temporaryPassword = generateRandomPassword();
            Email from = new Email("yumdrop.help@gmail.com");
            String subject = "Your One Time Password from Yumdrop!";
            Email to = new Email(restaurantManagerEmail);

            Content content = new Content("text/html", "Hello User! Your one time password is <strong> " + temporaryPassword + " </strong> \n" +
                    "Please enter this code to complete registration with Yumdrop");
            Mail mail = new Mail(from, subject, to, content);
            mail.personalization.get(0).addSubstitution("-username-", "Some blog user");
            SendGrid sg = new SendGrid(sendGridAPIKey);

            Request request = new Request();
            try {
                request.setMethod(Method.POST);
                request.setEndpoint("mail/send");
                request.setBody(mail.build());

                Response response = sg.api(request);
            } catch (IOException ex) {
            }

            RestaurantManager restaurantManagerWithTemporaryPassword = new RestaurantManager(restaurantId, restaurantManagerEmail, PasswordUtils.convertPasswordToHash(temporaryPassword), true);
            RestaurantManager newRestaurantManager = restaurantManagerRepository.save(restaurantManagerWithTemporaryPassword);
            return true;
        }

        return false;
    }

    private String generateRandomPassword() {
        String SALTCHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 10) { // length of the random string.
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr;
    }

}
