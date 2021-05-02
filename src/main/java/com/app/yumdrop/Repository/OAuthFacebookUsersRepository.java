package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.OAuthFacebookUsers;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OAuthFacebookUsersRepository extends MongoRepository<OAuthFacebookUsers, String> {

    OAuthFacebookUsers findByfbUserEmail(String fbUserEmail);
}
