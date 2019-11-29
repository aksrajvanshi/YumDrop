package com.app.yumdrop.Service;

public interface SmsTwoFactorService {
    boolean send2FaCodeAsEmail(String email, String twoFactorCode);

    boolean send2FaCodeAsEmailToRestaurant(String email,  String restaurantId, String twoFactorCode);

    boolean send2FaCodeAsEmailDeliveryAgent(String email, String twoFactorCode);
}
