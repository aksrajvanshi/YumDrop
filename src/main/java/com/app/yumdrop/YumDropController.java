package com.app.yumdrop;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.classes.UsersDetails;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.app.yumdrop.Repository.UsersRepository;
//import jdk.nashorn.internal.parser.JSONParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;


@ComponentScan
@Controller
public class YumDropController {

    @Autowired
    private UsersRepository userRepository;


    @RequestMapping(value = "/")
    public String loadInitialPublicPage() {

        String user = "akshay";
        String email = "aksrajvanshi@gmail.com";
        String password = "aksrajvanshi";

        return "index";
    }


    @PostMapping(value = "/userRegistration")
    public String userRegistration(@RequestBody String userDataForm) throws JSONException {

        ObjectMapper mapper = new ObjectMapper();
        ArrayList<String> a = new ArrayList<String>();



        //System.out.println(userDataForm);
        //Gson();
       // JSONParser js = new JSONParser();
        //JSONObject json = (JSONObject) parser.parse(userDataForm);
        //;
        /***try{
            JSONObject jobj = new JSONObject(userDataForm);
            JSONObject dataResult = jobj.getJSONObject("userDataForm");
            JSONArray jArr = (JSONArray) dataResult.getJSONArray("current_condition");
            for(int i = 0; i < jArr.length();i++) {
                JSONObject innerObj = jArr.getJSONObject(i);
                for(Iterator it = innerObj.keys(); it.hasNext(); ) {
                    String key = (String)it.next();
                    System.out.println(key + ":" + innerObj.get(key));
                }
            }
        }catch (JSONException e) {
            e.printStackTrace();
        }
        return userDataForm;***/
        System.out.println(userDataForm);
        return userDataForm;
    }

    @PostMapping(value = "/restaurantRegistration")
    public String testButton(@RequestBody String userDataForm) {
        System.out.println(userDataForm);

        return userDataForm;
    }


}
