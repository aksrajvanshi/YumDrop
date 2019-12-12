package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.OAuthFacebookUsers;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.OAuthFacebookUsersRepository;
import com.app.yumdrop.Service.OAuthFacebookUserLoginAndRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class OAuthFacebookUserLoginAndRegistrationServiceImpl implements OAuthFacebookUserLoginAndRegistrationService {

    @Autowired
    OAuthFacebookUsersRepository oAuthFacebookUsersRepository;

    @Override
    public ResponseEntity<?> registerFbUser(OAuthFacebookUsers fbUserRegistrationDetail) {

        boolean isUserExists = oAuthFacebookUsersRepository.existsById(fbUserRegistrationDetail.getFbUserEmail());

        if(isUserExists){
            ErrorMessage userAlreadyExists = new ErrorMessage(new Date(), "User already exists!",
                    "");
            return new ResponseEntity<>(userAlreadyExists, HttpStatus.BAD_REQUEST);
        }

        OAuthFacebookUsers fbUserRegistration = oAuthFacebookUsersRepository.save(fbUserRegistrationDetail);
        if(fbUserRegistration!=null){
            SuccessMessage successfulFbRegistration = new SuccessMessage(new Date(), "You've successfully registered using Facebook");
            return new ResponseEntity<>(successfulFbRegistration, HttpStatus.OK);
        }

        ErrorMessage userNotRegistered = new ErrorMessage(new Date(), "Internal System error.",
                "");
        return new ResponseEntity<>(userNotRegistered, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> loginFbUser(OAuthFacebookUsers fbUserLoginDetail) {

        OAuthFacebookUsers isUserRegistered = oAuthFacebookUsersRepository.findByfbUserEmail(fbUserLoginDetail.getFbUserEmail());
        if(isUserRegistered == null){
            ErrorMessage fbUserNotFound = new ErrorMessage(new Date(), "We were unable to find you in the system",
                    "");
            return new ResponseEntity<>(fbUserNotFound, HttpStatus.NOT_FOUND);
        }

        if(isUserRegistered.getFbUserEmail().equals(fbUserLoginDetail.getFbUserEmail()) &&
        isUserRegistered.getFbUserID().equals(fbUserLoginDetail.getFbUserID())){
            SuccessMessage successfulFbLogin = new SuccessMessage(new Date(), "You've successfully logged in using Facebook");
            return new ResponseEntity<>(successfulFbLogin, HttpStatus.OK);
        }

        ErrorMessage systemError = new ErrorMessage(new Date(), "Internal server error.",
                "");
        return new ResponseEntity<>(systemError, HttpStatus.BAD_REQUEST);
    }
}
