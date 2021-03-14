package net.javaguides.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan(basePackages= {"net.javaguides.springboot.controller"})
@SpringBootApplication
public class CrudeApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudeApplication.class, args);
	}

}
