package com.app.yumdrop.Service;

public interface SmsTwoFactorService {

    boolean send2FaCodeAsSms(String mobilePhoneNumber, String twoFactorCode);
}
