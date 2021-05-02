package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.UsersOtp;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersOtpRepository extends MongoRepository<UsersOtp, String> {

    UsersOtp findByuserEmail(String userEmail);
}
