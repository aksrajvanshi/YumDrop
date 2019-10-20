package com.app.yumdrop.Controller;

import com.app.yumdrop.Entity.Users;
import com.app.yumdrop.FormEntity.ForgotPasswordForm;
import com.app.yumdrop.Service.ForgotPasswordService;
import com.app.yumdrop.Utils.PasswordUtils;
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
public class ForgotPasswordController {

    @Autowired
    private ForgotPasswordService forgotPasswordService;

    @RequestMapping(value = "/forgotUserPassword", method = RequestMethod.POST)
    public ResponseEntity<?> sendForgotPasswordEmailToUser(@RequestBody ForgotPasswordForm forgotPasswordForm){

        return forgotPasswordService.sendMailWithTemporaryPassword(forgotPasswordForm.getUserEmail());
    }

    @RequestMapping(value = "/setNewUserPassword", method = RequestMethod.POST)
    public ResponseEntity<?> verifyTemporaryPasswordAndSetNewUserPassword(@RequestBody ForgotPasswordForm forgotPasswordForm){

        Users newPasswordUser = forgotPasswordService.verifyTemporaryPasswordAndSetNewPassword(forgotPasswordForm.getUserEmail(),
                forgotPasswordForm.getTemporaryPassword(), PasswordUtils.convertPasswordToHash(forgotPasswordForm.getNewPassword()));

        if(newPasswordUser!=null)
            return ResponseEntity.ok().body(newPasswordUser);
        else
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
