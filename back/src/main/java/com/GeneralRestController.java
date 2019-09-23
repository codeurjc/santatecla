package com;

import com.user.UserComponent;
import com.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GeneralRestController {
    
    @Autowired
	protected UserComponent userComponent;
	
	@Autowired
	protected UserService userService;
    
}