package com.app.yumdrop.Utils;

public class OtpUtils {

    public static String convertOtpToHash(String otpToConvert) {
        return HashUtils.convertToHashString(otpToConvert);
    }

    public static boolean checkIfOtpMatches(String formOtp, String hashedUserOtpFromDb) {
        String hashedFormPassword = convertOtpToHash(formOtp);
        return hashedFormPassword.equals(hashedUserOtpFromDb);
    }

    public static boolean checkIfDAOtpMatches(String formDAOtp, String hashedDAOtpFromDb) {
        String hashedFormPassword = convertOtpToHash(formDAOtp);
        return hashedFormPassword.equals(hashedDAOtpFromDb);
    }
}
