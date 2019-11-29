package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.UserCart;
import com.app.yumdrop.Entity.UserCartId;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserCartRepository extends CrudRepository<UserCart, UserCartId> {

    List<UserCart> findByuserEmail(String userEmail);

}
