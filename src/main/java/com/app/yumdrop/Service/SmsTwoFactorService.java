package com.app.yumdrop.Service;

public interface SmsTwoFactorService {

    boolean send2FaCodeAsSms(String email, String mobilePhoneNumber, String twoFactorCode);
}
