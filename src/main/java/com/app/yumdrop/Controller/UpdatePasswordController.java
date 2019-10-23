package com.app.yumdrop.Controller;

import com.app.yumdrop.FormEntity.ForgotPasswordForm;
import com.app.yumdrop.FormEntity.UpdatePasswordForm;
import com.app.yumdrop.Service.ForgotPasswordService;
import com.app.yumdrop.Service.UpdatePasswordService;
import com.app.yumdrop.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@ComponentScan
@Controller
public class UpdatePasswordController {

    @Autowired
    private UpdatePasswordService updatePasswordService;

    @RequestMapping(value = "/setNewUserPassword", method = RequestMethod.POST)
    public ResponseEntity<?> matchAndSetNewPassword(@RequestBody UpdatePasswordForm updatePasswordForm) {
        return updatePasswordService.matchAndSetNewPassword(
                updatePasswordForm.getUserEmail(),
                updatePasswordForm.getPassword(),
                PasswordUtils.convertPasswordToHash(updatePasswordForm.getPassword()));
    }

}
