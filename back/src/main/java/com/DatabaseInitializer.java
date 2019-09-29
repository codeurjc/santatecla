package com;

import javax.annotation.PostConstruct;

import com.card.*;
import com.definition.definition_question.DefinitionQuestion;
import com.definition.definition_question.DefinitionQuestionRepository;
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

        @Autowired
        private DefinitionQuestionRepository definitionRepository;

	@PostConstruct
	public void init() {
                //Units
                Unit unit1 = new Unit("Programming language");
                Unit unit2 = new Unit("Java");
                Unit unit3 = new Unit("Python");

                unitRepository.save(unit1);
                unitRepository.save(unit2);
                unitRepository.save(unit3);

                //Cards
                Card card1 = new Card("Programming languaje1");
                Card card2 = new Card("Java1");
                Card card3 = new Card("Python1");

                unit1.getFiles().add(card1);
                unit2.getFiles().add(card2);
                unit3.getFiles().add(card3);

                DefinitionQuestion definition1 = new DefinitionQuestion("¿Qué es el software?", 0);
                DefinitionQuestion definition2 = new DefinitionQuestion("¿Qué es Java?", 0);
                DefinitionQuestion definition3 = new DefinitionQuestion("¿Es Java un lenguaje de programación?", 1, "Sí");

                definitionRepository.save(definition1);
                definitionRepository.save(definition2);
                definitionRepository.save(definition3);
        
                userRepository.save(new User("alumno", "alumno"));
                userRepository.save(new User("profesor", "profesor", "ROLE_ADMIN"));
	}

}
