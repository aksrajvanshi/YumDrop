package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.UsersAddress;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersAddressRepository extends MongoRepository<UsersAddress, String> {
}
