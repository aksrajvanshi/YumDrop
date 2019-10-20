package com.app.yumdrop.Utils;

import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PasswordUtils {

    public static String convertToHash(String stringToConvert) {
        MessageDigest md = null;

        if (stringToConvert == null) {
            return null;
        }

        try {
            md = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        md.update(stringToConvert.getBytes());
        byte[] digest = md.digest();
        String hashedString = DatatypeConverter
                .printHexBinary(digest).toUpperCase();

        return hashedString;
    }

    public static boolean checkIfPasswordMatches(String formPassword, String hashedUserPasswordFromDb){
        String hashedFormPassword = convertToHash(formPassword);
        return hashedFormPassword.equals(hashedUserPasswordFromDb);
    }

}
