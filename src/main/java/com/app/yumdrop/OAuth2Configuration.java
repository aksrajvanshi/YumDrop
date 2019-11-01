package com.app.yumdrop;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableOAuth2Sso
public class OAuth2Configuration extends WebSecurityConfigurerAdapter{

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                .and()
                .antMatcher("/loginWithFacebook**")
                .authorizeRequests()
                .antMatchers("/loginWithFacebook**", "/webjars/**", "/error**")
                .permitAll()
                .anyRequest()
                .authenticated();
    }


}
