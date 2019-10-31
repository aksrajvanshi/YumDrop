package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.UsersOtp;
import com.app.yumdrop.Repository.UsersOtpRepository;
import com.app.yumdrop.Service.SmsTwoFactorService;
import com.app.yumdrop.Utils.PasswordUtils;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SmsTwoFactorServiceImpl implements SmsTwoFactorService {

    @Autowired
    UsersOtpRepository usersOtpRepository;

    @Autowired
    public JavaMailSender javaMailSender;

    @Override
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
}
