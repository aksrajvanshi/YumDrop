package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Restaurant;
import com.app.yumdrop.Entity.RestaurantManager;
import com.app.yumdrop.FormEntity.RestaurantRegisterForm;
import com.app.yumdrop.Repository.RestaurantManagerRepository;
import com.app.yumdrop.Repository.RestaurantRepository;
import com.app.yumdrop.Service.RestaurantRegistrationService;
import com.app.yumdrop.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

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

    @Override
    public ResponseEntity<?> registerRestaurant(RestaurantRegisterForm restaurantRegisterForm) {

        boolean primaryManagerEmailSent = sendMailWithTemporaryPasswordToRestaurantManager(restaurantRegisterForm.getRestaurantId(), restaurantRegisterForm.getRestaurantPrimaryEmailId());
        boolean secondaryManagerEmailSent = sendMailWithTemporaryPasswordToRestaurantManager(restaurantRegisterForm.getRestaurantId(), restaurantRegisterForm.getRestaurantSecondaryEmailId());

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
        if (managerExistsInDb != null) {
            for (int i = 0; i < managerExistsInDb.size(); i++) {
                if (managerExistsInDb.get(i).getRestaurantManagerEmailId().equals(restaurantManagerEmail)) {
                    doesManagerExist = true;
                    break;
                }
            }
        }
        if (doesManagerExist) {
            String temporaryPassword = generateRandomPassword();
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setTo(restaurantManagerEmail);
            simpleMailMessage.setSubject("Temporary Password from Yumdrop");
            simpleMailMessage.setText("Hello user! Your temporary password is: " + temporaryPassword +
                    ". Please use this temporary password to set a new password and login into your account.");

            javaMailSender.send(simpleMailMessage);

            RestaurantManager restaurantManagerTemporaryPassword = new RestaurantManager(restaurantId, restaurantManagerEmail, PasswordUtils.convertPasswordToHash(temporaryPassword));
            RestaurantManager newRestaurantManager = restaurantManagerRepository.save(restaurantManagerTemporaryPassword);
            return newRestaurantManager != null;
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
