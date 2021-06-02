package com.app.yumdrop.Utils;

import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class HashUtils {

    public static String convertToHashString(String stringtoHash) {
        MessageDigest md = null;

        if (stringtoHash == null) {
            return null;
        }

        try {
            md = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        md.update(stringtoHash.getBytes());
        byte[] digest = md.digest();
        String hashedString = DatatypeConverter.printHexBinary(digest).toUpperCase();

        return hashedString;
    }
}
