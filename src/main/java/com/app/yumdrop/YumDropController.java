package com.app.yumdrop;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


@ComponentScan
@Controller
public class YumDropController {

<<<<<<< HEAD
    @RequestMapping(value = "/")
    public String hello() {
=======
    @Autowired
    private UsersRepository userRepository;


    @RequestMapping(value = "/")
    public String loadInitialPublicPage() throws NoSuchAlgorithmException {

        String password = "Aksrajvanshi@1992";
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(password.getBytes());
        byte[] digest = md.digest();
        String myHash = DatatypeConverter
                .printHexBinary(digest).toUpperCase();

        System.out.println(myHash + " length of hashed password: " + myHash.length());
>>>>>>> 6cdbe1550b6f9ed916be18cd197914214270e343
        return "index";
    }

}
