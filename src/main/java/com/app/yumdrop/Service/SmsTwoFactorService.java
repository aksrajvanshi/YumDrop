package com.app.yumdrop.Service;

public interface SmsTwoFactorService {
    boolean send2FaCodeAsEmail(String email, String twoFactorCode);
    boolean send2FaCodeAsEmailDA(String email, String twoFactorCode);
}
