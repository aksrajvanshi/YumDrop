package com.app.yumdrop.Utils;

public class PasswordUtils {

    public static String convertPasswordToHash(String passwordToConvert) {
        return HashUtils.convertToHashString(passwordToConvert);
    }

    public static boolean checkIfPasswordMatches(String formPassword, String hashedUserPasswordFromDb) {
        String hashedFormPassword = convertPasswordToHash(formPassword);
        return hashedFormPassword.equals(hashedUserPasswordFromDb);
    }

}
