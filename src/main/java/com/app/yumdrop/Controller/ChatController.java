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
        System.out.println("In check for user chat");
        ChatRequestForUser userChatReq = chatRequestForUserRepository.findByrestaurantId(chatRequestForUser.getRestaurantId());
        if(userChatReq == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.status(HttpStatus.OK).build();
    }


    @RequestMapping(value = "/checkForUserChatRequestDeliveryAgent", method = RequestMethod.POST)
    public ResponseEntity<?> checkForUserChatRequestDeliveryAgent(@RequestBody ChatRequestForUser chatRequestForUser){

    System.out.println("in check for user chat req delivery agent");
    ChatRequestForUser userChatReq = chatRequestForUserRepository.findBydeliveryAgentEmailId(chatRequestForUser.getDeliveryAgentEmailId());
        if(userChatReq == null){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @RequestMapping(value = "/chatWithDeliveryAgentOnly", method = RequestMethod.POST)
    public ResponseEntity<?> chatWithDeliveryAgentOnly(@RequestBody ChatRequestForUser chatRequestForUser){
        System.out.println(chatRequestForUser.getDeliveryAgentEmailId() + " "+chatRequestForUser.getUserEmail());

        chatRequestForUserRepository.save(chatRequestForUser);

        return ResponseEntity.status(HttpStatus.OK).build();
    }



    @RequestMapping(value = "/chatWithRestaurantAndDeliveryAgent", method = RequestMethod.POST)
    public ResponseEntity<?> chatWithRestaurantAndDeliveryAgent(@RequestBody ChatRequestForUser chatRequestForUser){
        chatRequestForUserRepository.save(chatRequestForUser);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @RequestMapping(value = "/chatWithRestaurantOnly", method = RequestMethod.POST)
    public ResponseEntity<?> chatWithRestaurantOnly(@RequestBody ChatRequestForUser chatRequestForUser){
        System.out.println(chatRequestForUser.getRestaurantId() + " "+chatRequestForUser.getUserEmail());
        chatRequestForUserRepository.save(chatRequestForUser);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
