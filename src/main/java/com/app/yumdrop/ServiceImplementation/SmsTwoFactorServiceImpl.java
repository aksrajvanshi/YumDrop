package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.DeliveryAgentOtp;
import com.app.yumdrop.Entity.RestaurantOtp;
import com.app.yumdrop.Entity.UsersOtp;
import com.app.yumdrop.Repository.DeliveryAgentOtpRepository;
import com.app.yumdrop.Repository.RestaurantOtpRepository;
import com.app.yumdrop.Repository.UsersOtpRepository;
import com.app.yumdrop.Service.SmsTwoFactorService;
import com.app.yumdrop.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SmsTwoFactorServiceImpl implements SmsTwoFactorService {

    @Autowired
    public JavaMailSender javaMailSender;

    @Autowired
    DeliveryAgentOtpRepository deliveryAgentOtpRepository;

    @Autowired
    UsersOtpRepository usersOtpRepository;

    @Autowired
    RestaurantOtpRepository restaurantOtpRepository;

    public boolean send2FaCodeAsEmail(String userEmail, String twoFactorCode) {

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(userEmail);

        simpleMailMessage.setSubject("One Time Password from Yumdrop");
        simpleMailMessage.setText("Hello user! Your One Time Password is: " + twoFactorCode +
                ". Please use this temporary password to set a new password and login into your account.");

        javaMailSender.send(simpleMailMessage);
        usersOtpRepository.save(new UsersOtp(userEmail, PasswordUtils.convertPasswordToHash(twoFactorCode)));
        return true;
    }

    @Override
    public boolean send2FaCodeAsEmailToRestaurant(String restaurantPrimaryEmail, String restaurantId, String twoFactorCode) {

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(restaurantPrimaryEmail);

        simpleMailMessage.setSubject("One Time Password from Yumdrop");
        simpleMailMessage.setText("Hello Restaurant Manager! Your one time password is " + twoFactorCode + " " +
                "Please enter this code to complete registration with Yumdrop");

        javaMailSender.send(simpleMailMessage);
        restaurantOtpRepository.save(new RestaurantOtp(restaurantId, restaurantPrimaryEmail, PasswordUtils.convertPasswordToHash(twoFactorCode)));
        return true;
    }

    @Override
    public boolean send2FaCodeAsEmailDeliveryAgent(String daEmail, String twoFactorCode) {

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setSubject("One Time Password from Yumdrop");
        simpleMailMessage.setText("Hello User! Your one time password is " + twoFactorCode + " " +
                "Please enter this code to complete registration with Yumdrop");

        javaMailSender.send(simpleMailMessage);
        deliveryAgentOtpRepository.save(new DeliveryAgentOtp(daEmail, PasswordUtils.convertPasswordToHash(twoFactorCode)));
        return true;
    }
}
