package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.Users;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<Users, String> {
    /*
    Users findUsersByUserEmail(String email);
    Users findUsersByUserEmailAndUserName(String email, String username);
     */
}
