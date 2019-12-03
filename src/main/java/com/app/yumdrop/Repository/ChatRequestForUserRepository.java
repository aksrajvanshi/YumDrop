package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.ChatRequestForUser;
import org.springframework.data.repository.CrudRepository;

public interface ChatRequestForUserRepository extends CrudRepository<ChatRequestForUser, String> {

    @Override
    void delete(ChatRequestForUser entity);
}
