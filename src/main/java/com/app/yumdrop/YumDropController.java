package com.app.yumdrop;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;


@RestController
public class YumDropController {

    @GetMapping(value = "/api/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }

}
