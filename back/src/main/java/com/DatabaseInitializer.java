package com;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.user.*;

@Component
public class DatabaseInitializer {
    
    @Autowired
	private UserRepository userRepository;

	@PostConstruct
	public void init() {

        // Sample users
		userRepository.save(new User("alumno", "alumno"));
        userRepository.save(new User("profesor", "profesor", "ROLE_ADMIN"));

	}

}
