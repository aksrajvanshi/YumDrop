package com.app.yumdrop;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@ComponentScan
@Controller
public class YumDropController {

    @RequestMapping(value = "/")
    public String hello() {
        return "index";
    }

}
