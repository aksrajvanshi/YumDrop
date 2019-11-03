package com.app.yumdrop.Service;

import com.app.yumdrop.Entity.OAuthFacebookUsers;
import org.springframework.http.ResponseEntity;

public interface OAuthFacebookUserLoginAndRegistrationService {

    ResponseEntity<?> registerFbUser(OAuthFacebookUsers fbUserRegistrationDetail);

    ResponseEntity<?> loginFbUser(OAuthFacebookUsers fbUserLoginDetail);
}
