package com.app.yumdrop.Service;

public interface SmsTwoFactorService{

    public boolean send2FaCodeAsEmail(String userEmail, String twoFactorCode);
}
