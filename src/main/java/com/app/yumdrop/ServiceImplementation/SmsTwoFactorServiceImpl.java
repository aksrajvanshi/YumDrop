package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Service.SmsTwoFactorService;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsTwoFactorServiceImpl implements SmsTwoFactorService {

    private static final String ACCOUNT_SID = System.getenv("TWILIO_ACCOUNT_SID");
    private static final String AUTH_TOKEN = System.getenv("TWILIO_AUTH_TOKEN");

    static{
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    }

    @Override
    public boolean send2FaCodeAsSms(String mobilePhoneNumber, String twoFactorCode) {
        System.out.println(ACCOUNT_SID);

        Message.creator(new PhoneNumber(mobilePhoneNumber), new PhoneNumber("+16197802581"), "Hello Dhriti Mehta! Your Two Factor Authentication Code is: " + twoFactorCode).create();
        return true;
    }
}
