package com;

import com.user.UserComponent;
import com.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GeneralRestController{

    protected interface Visitor {}
    protected interface Logged {}

    protected final int PAGE_SIZE = 6;
	protected final Pageable DEFAULT_PAGE = PageRequest.of(0, PAGE_SIZE);
    
    @Autowired
	protected UserComponent userComponent;
	
	@Autowired
	protected UserService userService;
    
}