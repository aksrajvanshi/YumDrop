package com.app.yumdrop.Controller;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@ComponentScan
@Controller
public class InitialPageLoadController {

    /**
     * Loads the initial public page of the Yumdrop application
     *
     * @return
     */
    @RequestMapping(value = "/")
    public String loadInitialPublicPage() {

        return "index";
    }

}
