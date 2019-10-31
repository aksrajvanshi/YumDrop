package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.UsersOtp;
import com.app.yumdrop.Repository.UsersOtpRepository;
import com.app.yumdrop.Service.SmsTwoFactorService;
import com.app.yumdrop.Utils.PasswordUtils;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.sendgrid.*;

import java.io.IOException;

@Service
@Configuration
@PropertySource("classpath:application.properties")
public class SmsTwoFactorServiceImpl implements SmsTwoFactorService {

    @Autowired
    UsersOtpRepository usersOtpRepository;

    @Autowired
    public JavaMailSender javaMailSender;

    @Value("${sendgrid.api.key}")
    String sendGridAPIKey;

    @Override
    public boolean send2FaCodeAsEmail(String userEmail, String twoFactorCode) {

        //SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        //simpleMailMessage.setTo(userEmail);
        Email from = new Email("yumdrop.help@gmail.com");
        String subject = "Your One Time Password from Yumdrop!";
        Email to = new Email(userEmail);

        Content content = new Content("text/html", "Hello User! Your one time password is <strong> " + twoFactorCode + " </strong> \n" +
                "Please enter this code to complete registration with Yumdrop" );
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

    /*    simpleMailMessage.setSubject("One Time Password from Yumdrop");
        simpleMailMessage.setText("Hello user! Your One Time Password is: " + twoFactorCode +
                ". Please use this temporary password to set a new password and login into your account.");

        javaMailSender.send(simpleMailMessage); */
        usersOtpRepository.save(new UsersOtp(userEmail, PasswordUtils.convertPasswordToHash(twoFactorCode)));
        return true;
    }
}
