package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.ChatRequestForUser;
import com.app.yumdrop.Repository.ChatRequestForUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@ComponentScan
@Controller
public class ChatController {

    @Autowired
    ChatRequestForUserRepository chatRequestForUserRepository;

    @RequestMapping(value = "/checkForUserChatRequest", method = RequestMethod.POST)
    public ResponseEntity<?> userChatRequest(@RequestBody ChatRequestForUser chatRequestForUser){
        // add a record
        // chatRequestForUserRepository.save(chatRequestForUser);



        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
