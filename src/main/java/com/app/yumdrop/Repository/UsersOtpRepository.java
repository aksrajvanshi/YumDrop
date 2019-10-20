package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.Entity.UsersOtp;
import org.springframework.data.repository.CrudRepository;

public interface UsersOtpRepository extends CrudRepository<UsersOtp, String> {

    UsersOtp findByuserEmail(String userEmail);
}
