package com.app.yumdrop.Repository;

import com.app.yumdrop.Entity.OAuthFacebookUsers;
import org.springframework.data.repository.CrudRepository;

public interface OAuthFacebookUsersRepository extends CrudRepository<OAuthFacebookUsers, String> {

    OAuthFacebookUsers findByfbUserEmail(String fbUserEmail);
}
