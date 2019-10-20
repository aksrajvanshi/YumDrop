package com.app.yumdrop.Controller;
import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;

@ComponentScan
@Controller
public class EmailServiceController {

    Email from = new Email("yumdrop.help@gmail.com");
    String subject = "Password reset for YumDrop";
    Email to = new Email("x@y.com");
    Content content = new Content("text/plain", "Please enter the below code : 7657");
    Mail mail = new Mail(from, subject, to, content);

    SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
    Request request = new Request();
/*
        request.setMethod(Method.POST);
        request.setEndpoint("mail/send");
        request.setBody(mail.build());
        Response response = sg.api(request);
        System.out.println(response.getStatusCode());
        System.out.println(response.getBody());
        System.out.println(response.getHeaders());
*/
}
