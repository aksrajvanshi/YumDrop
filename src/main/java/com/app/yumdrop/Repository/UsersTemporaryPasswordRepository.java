package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.UsersTemporaryPassword;
import org.springframework.data.repository.CrudRepository;

public interface UsersTemporaryPasswordRepository extends CrudRepository<UsersTemporaryPassword, String> {

    UsersTemporaryPassword findByuserEmail(String userEmail);
}
