package com.app.yumdrop;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@Controller
@ComponentScan
public class YumDropController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String hello() {
        return "index";
    }

}
