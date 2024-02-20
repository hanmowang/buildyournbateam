package com.nbastats.nbabackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages={"com.nbastats.NbaBackendApplication.controller","com.nbastats.NbaBackendApplication.repository"})
@ComponentScan(basePackages = {"com.nbastats.NbaBackendApplication"})
public class NbaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(NbaBackendApplication.class, args);
	}

}
