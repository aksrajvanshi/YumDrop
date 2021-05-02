package com.app.yumdrop.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Document(collection = "oauth_facebook_users")
public class OAuthFacebookUsers {

    @Id
    @Column(name = "fb_user_email", nullable = false)
    @Email(message = "user email should be a valid email")
    private String fbUserEmail;

    @NotNull
    @Column(name = "fb_user_id", nullable = false)
    private String fbUserID;

    @NotNull
    @Column(name = "fb_user_access_token", nullable = false)
    private String fbUserAccessToken;

    @Column(name = "fb_user_name", nullable = false)
    private String fbUserName;

    public OAuthFacebookUsers() {
    }

    public OAuthFacebookUsers(@NotNull String fbUserEmail, @NotNull String fbUserID, @NotNull String fbUserAccessToken, String fbUserName) {
        this.fbUserEmail = fbUserEmail;
        this.fbUserID = fbUserID;
        this.fbUserAccessToken = fbUserAccessToken;
        this.fbUserName = fbUserName;
    }

    public String getFbUserEmail() {
        return fbUserEmail;
    }

    public void setFbUserEmail(String fbUserEmail) {
        this.fbUserEmail = fbUserEmail;
    }

    public String getFbUserID() {
        return fbUserID;
    }

    public void setFbUserID(String fbUserID) {
        this.fbUserID = fbUserID;
    }

    public String getFbUserAccessToken() {
        return fbUserAccessToken;
    }

    public void setFbUserAccessToken(String fbUserAccessToken) {
        this.fbUserAccessToken = fbUserAccessToken;
    }

    public String getFbUserName() {
        return fbUserName;
    }

    public void setFbUserName(String fbUserName) {
        this.fbUserName = fbUserName;
    }
}
