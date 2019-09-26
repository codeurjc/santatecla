package com;

import javax.annotation.PostConstruct;

import com.card.*;
import com.itinerary.*;
import com.relation.*;
import com.unit.*;
import com.user.User;
import com.user.UserRepository;
import com.view.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInitializer {
    
        @Autowired
        private CardRepository cardRepository;

        @Autowired
        private ItineraryRepository itineraryRepository;
    
        @Autowired
        private UnitRepository unitRepository;
    
        @Autowired
        private RelationRepository relationRepository;

        @Autowired
        private ViewRepository viewRepository;
  
        @Autowired
        private UserRepository userRepository;

	@PostConstruct
	public void init() {
                
                // Cards
                Card card1 = new Card("¿Qué?");
                card1.setText("Que1");
                Card card2 = new Card("¿Por qué?");
                Card card3 = new Card("¿Para qué?");

                cardRepository.save(card1);
                cardRepository.save(card2);
                cardRepository.save(card3);

                // Units
                Unit unit1 = new Unit("Programming language");
                Unit unit2 = new Unit("Java");
                Unit unit3 = new Unit("Python");

                unit1.addCard(card1);
                unit1.addCard(card2);
                unit1.addCard(card3);

                unitRepository.save(unit1);
                unitRepository.save(unit2);
                unitRepository.save(unit3);
        
                // Users
                userRepository.save(new User("alumno", "alumno"));
                userRepository.save(new User("profesor", "profesor", "ROLE_ADMIN"));

	}

}
