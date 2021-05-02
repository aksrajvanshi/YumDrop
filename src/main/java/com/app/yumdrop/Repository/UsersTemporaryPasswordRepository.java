package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.UsersTemporaryPassword;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersTemporaryPasswordRepository extends MongoRepository<UsersTemporaryPassword, String> {

    UsersTemporaryPassword findByuserEmail(String userEmail);
}
