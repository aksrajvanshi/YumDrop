package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.OAuthFacebookUsers;
import com.app.yumdrop.FormEntity.UserLoginDetails;
import com.app.yumdrop.Service.OAuthFacebookUserLoginAndRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@ComponentScan
@Controller
public class OAuthFacebookUserLoginAndRegistrationController {

    @Autowired
    OAuthFacebookUserLoginAndRegistrationService oAuthFacebookUserLoginAndRegistrationService;

    @RequestMapping(value = "/facebookUserRegistration", method = RequestMethod.POST)
    public ResponseEntity<?> OAuthFacebookUserRegistration(@RequestBody OAuthFacebookUsers fbUserRegistrationDetails) {

        return oAuthFacebookUserLoginAndRegistrationService.registerFbUser(fbUserRegistrationDetails);
    }

    @RequestMapping(value = "/facebookUserLogin", method = RequestMethod.POST)
    public ResponseEntity<?> OAuthFacebookUserLogin(@RequestBody OAuthFacebookUsers fbUserLoginDetails) {

        return oAuthFacebookUserLoginAndRegistrationService.loginFbUser(fbUserLoginDetails);
    }

}
