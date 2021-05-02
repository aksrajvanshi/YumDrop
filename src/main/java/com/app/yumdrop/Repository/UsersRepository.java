package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<Users, String> {

    Users findByuserEmail(String userEmail);
}
