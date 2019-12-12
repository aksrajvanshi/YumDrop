package com.app.yumdrop.ServiceImplementation;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.Entity.UsersAddress;
import com.app.yumdrop.Messages.ErrorMessage;
import com.app.yumdrop.Messages.SuccessMessage;
import com.app.yumdrop.Repository.UsersAddressRepository;
import com.app.yumdrop.Repository.UsersRepository;
import com.app.yumdrop.Service.SaveUserAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class SaveUserAddressServiceImpl implements SaveUserAddressService {

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    UsersAddressRepository usersAddressRepository;

    @Override
    public ResponseEntity<?> saveUserAddress(UsersAddress usersAddress) {

        if(usersAddress.getUserAddress().length() == 0){
            ErrorMessage emptyAddress = new ErrorMessage(new Date(), "User address cannot be empty",
                    "");
            return new ResponseEntity<>(emptyAddress, HttpStatus.BAD_REQUEST);
        }

        Users userDetails = usersRepository.findByuserEmail(usersAddress.getUserEmail());

        userDetails.setUserAddress(usersAddress.getUserAddress());
        usersRepository.save(userDetails);
        UsersAddress isUserAddressSaved = usersAddressRepository.save(usersAddress);

        if(isUserAddressSaved != null){
            SuccessMessage successfulLoginMessage = new SuccessMessage(new Date(), "Address successfully saved!");
            return new ResponseEntity<>(successfulLoginMessage, HttpStatus.OK);
        }

        ErrorMessage saveAddressUnsuccessful = new ErrorMessage(new Date(), "User address could not be saved",
                "");
        return new ResponseEntity<>(saveAddressUnsuccessful, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
