package com.haleyapp.firstapp;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class FrontController {

	@GetMapping("/welcome")
	public String welcome() {
		
		return "welcome to spring boot app development";
	}
	
}
