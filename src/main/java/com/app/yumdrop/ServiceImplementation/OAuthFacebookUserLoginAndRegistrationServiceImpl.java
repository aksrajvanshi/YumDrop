package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.OAuthFacebookUsers;
import com.app.yumdrop.Repository.OAuthFacebookUsersRepository;
import com.app.yumdrop.Service.OAuthFacebookUserLoginAndRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class OAuthFacebookUserLoginAndRegistrationServiceImpl implements OAuthFacebookUserLoginAndRegistrationService {

    @Autowired
    OAuthFacebookUsersRepository oAuthFacebookUsersRepository;

    @Override
    public ResponseEntity<?> registerFbUser(OAuthFacebookUsers fbUserRegistrationDetail) {

        OAuthFacebookUsers fbUserRegistration = oAuthFacebookUsersRepository.save(fbUserRegistrationDetail);
        if(fbUserRegistration!=null){
            return ResponseEntity.status(HttpStatus.OK).build();
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @Override
    public ResponseEntity<?> loginFbUser(OAuthFacebookUsers fbUserLoginDetail) {

        OAuthFacebookUsers isUserRegistered = oAuthFacebookUsersRepository.findByfbUserEmail(fbUserLoginDetail.getFbUserEmail());
        if(isUserRegistered == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        if(isUserRegistered.getFbUserEmail().equals(fbUserLoginDetail.getFbUserEmail()) &&
        isUserRegistered.getFbUserID().equals(fbUserLoginDetail.getFbUserID())){
            return ResponseEntity.status(HttpStatus.OK).body(isUserRegistered);
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}
