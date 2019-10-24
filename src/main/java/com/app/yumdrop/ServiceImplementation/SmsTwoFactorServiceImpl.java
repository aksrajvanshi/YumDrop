package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.UsersOtp;
import com.app.yumdrop.Repository.UsersOtpRepository;
import com.app.yumdrop.Service.SmsTwoFactorService;
import com.app.yumdrop.Utils.PasswordUtils;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SmsTwoFactorServiceImpl implements SmsTwoFactorService {

    private final static String ACCOUNT_SID = System.getenv("TWILIO_ACCOUNT_SID");
    private final static String AUTH_TOKEN = "TWILIO_AUTH_TOKEN";

    /*
    when committing to github use this code:

    private final static String ACCOUNT_SID = System.getenv("TWILIO_ACCOUNT_SID");
    private final static String AUTH_TOKEN = "TWILIO_AUTH_TOKEN";

    when using it in local, use the ACCOUNT_SID and AUTH_TOKEN as shared in the slack account.
     */


    static {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    }

    @Autowired
    UsersOtpRepository usersOtpRepository;

    @Override
    public boolean send2FaCodeAsSms(String email, String mobilePhoneNumber, String twoFactorCode) {

        try {
            Message.creator(new PhoneNumber(mobilePhoneNumber), new PhoneNumber("+16197802581"),
                    "Hello from Yumdrop! Your Two Factor Authentication Code is: " + twoFactorCode).create();
        } catch(Exception e){
            return false;
        }
        usersOtpRepository.save(new UsersOtp(email, PasswordUtils.convertPasswordToHash(twoFactorCode)));
        return true;
    }
}
