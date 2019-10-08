package com.app.yumdrop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@SpringBootApplication
@EnableJpaAuditing
public class YumdropApplication {

	public static void main(String[] args) {
		SpringApplication.run(YumdropApplication.class, args);

	}




}
