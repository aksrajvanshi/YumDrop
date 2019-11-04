package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Delivery_Agent_Otp;
import com.app.yumdrop.Entity.RestaurantOtp;
import com.app.yumdrop.Entity.UsersOtp;
import com.app.yumdrop.Repository.DeliveryAgentOtpRepository;
import com.app.yumdrop.Repository.RestaurantOtpRepository;
import com.app.yumdrop.Repository.UsersOtpRepository;
import com.app.yumdrop.Service.SmsTwoFactorService;
import com.app.yumdrop.Utils.PasswordUtils;
import com.sendgrid.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.io.IOException;

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

    @Value("${sendgrid.api.key}")
    String sendGridAPIKey;


    public boolean send2FaCodeAsEmail(String userEmail, String twoFactorCode) {

        Email from = new Email("yumdrop.help@gmail.com");
        String subject = "Your One Time Password from Yumdrop!";
        Email to = new Email(userEmail);

        Content content = new Content("text/html", "Hello User! Your one time password is <strong> " + twoFactorCode + " </strong> \n" +
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

        usersOtpRepository.save(new UsersOtp(userEmail, PasswordUtils.convertPasswordToHash(twoFactorCode)));
        return true;
    }

    @Override
    public boolean send2FaCodeAsEmailToRestaurant(String restaurantPrimaryEmail, String restaurantId, String twoFactorCode) {
        Email from = new Email("yumdrop.help@gmail.com");
        String subject = "Your One Time Password from Yumdrop!";
        Email to = new Email(restaurantPrimaryEmail);

        Content content = new Content("text/html", "Hello Restaurant Manager! Your one time password is <strong> " + twoFactorCode + " </strong> \n" +
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

        restaurantOtpRepository.save(new RestaurantOtp(restaurantId, restaurantPrimaryEmail, PasswordUtils.convertPasswordToHash(twoFactorCode)));
        return true;
    }

    @Override
    public boolean send2FaCodeAsEmailDA(String daEmail, String twoFactorCode) {

        Email from = new Email("yumdrop.help@gmail.com");
        String subject = "Your One Time Password from Yumdrop!";
        Email to = new Email(daEmail);

        Content content = new Content("text/html", "Hello User! Your one time password is <strong> " + twoFactorCode + " </strong> \n" +
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

        deliveryAgentOtpRepository.save(new Delivery_Agent_Otp(daEmail, PasswordUtils.convertPasswordToHash(twoFactorCode)));
        return true;
    }
}
