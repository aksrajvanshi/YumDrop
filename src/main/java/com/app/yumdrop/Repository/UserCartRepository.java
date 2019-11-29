package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.UserCart;
import com.app.yumdrop.Entity.UserCartId;
import org.springframework.data.repository.CrudRepository;

public interface UserCartRepository extends CrudRepository<UserCart, UserCartId> {
}
