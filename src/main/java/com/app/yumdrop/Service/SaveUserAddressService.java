package com.app.yumdrop.Service;

import com.app.yumdrop.Entity.UsersAddress;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface SaveUserAddressService {

    ResponseEntity<?> saveUserAddress(@RequestBody UsersAddress usersAddress);

}
