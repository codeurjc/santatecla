package com;

import java.util.ArrayList;
import java.util.Arrays;

import javax.annotation.PostConstruct;

import com.card.*;
import com.definition.definition_question.DefinitionQuestion;
import com.definition.definition_question.DefinitionQuestionRepository;
import com.itinerary.*;
import com.list_question.ListQuestion;
import com.list_question.ListQuestionRepository;
import com.relation.*;
import com.unit.*;
import com.user.User;
import com.user.UserRepository;
import com.slide.*;

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
        private SlideRepository slideRepository;
  
        @Autowired
        private UserRepository userRepository;

        @Autowired
        private DefinitionQuestionRepository definitionRepository;

        @Autowired
        private ListQuestionRepository listQuestionRepository;

	@PostConstruct
	public void init() {

                //Cards
                Card card1 = new Card("¿Que?");
                Card card2 = new Card("¿Que?");
                Card card3 = new Card("¿Cuándo?");
                Card card4 = new Card("¿Cuándo?");

                card1.setText("Un lenguaje de programación es un lenguaje formal que proporciona una serie de instrucciones...");
                card4.setText("A finales de 1953, John Backus sometió una propuesta a sus superiores en IBM...");
                card2.setText("Java es un lenguaje de programación y una plataforma informática...");
                card3.setText("Comercializada por primera vez en 1995 por Sun Microsystems...");

                cardRepository.save(card1);
                cardRepository.save(card2);
                cardRepository.save(card3);
                cardRepository.save(card4);
  
                //Units
                Unit unit1 = new Unit("Programming language");
                Unit unit2 = new Unit("Java");
                Unit unit3 = new Unit("Python");
 
                unit1.addCard(card1);
                unit1.addCard(card4);
                unit2.addCard(card2);
                unit2.addCard(card3);
                
                unitRepository.save(unit1);
                unitRepository.save(unit2);
                unitRepository.save(unit3);

                //Slides
                TheorySlide slide1 = new TheorySlide();
                PracticeSlide slide2 = new PracticeSlide();
                TheorySlide slide3 = new TheorySlide();

                slide1.getCards().add(card1);
                slide1.getCards().add(card4);
                slide3.getCards().add(card2);
                slide3.getCards().add(card3);

                slideRepository.save(slide1);
                slideRepository.save(slide2);
                slideRepository.save(slide3);

                //Itinerary
                Itinerary itinerary1 = new Itinerary("Introducción");
                Itinerary itinerary2 = new Itinerary("Introducción Java");

                itinerary2.getSlides().add(slide3);

                itineraryRepository.save(itinerary2);

                itinerary1.getItineraries().add(itinerary2);

                itinerary1.getSlides().add(slide1);
                itinerary1.getSlides().add(slide2);

                itineraryRepository.save(itinerary1);
                
                // Definition Questions
                DefinitionQuestion definition1 = new DefinitionQuestion("¿Qué es el software?", 0);
                DefinitionQuestion definition2 = new DefinitionQuestion("¿Qué es Java?", 0);
                DefinitionQuestion definition3 = new DefinitionQuestion("¿Es Java un lenguaje de programación?", 1, "Sí");

                definitionRepository.save(definition1);
                definitionRepository.save(definition2);
                definitionRepository.save(definition3);

                // List Questions
                ArrayList<String> possibleAnswers = new ArrayList<>();
                possibleAnswers.add("Java");
                possibleAnswers.add("Javascropt");
                possibleAnswers.add("Python");
                ArrayList<String> correctAnswer = new ArrayList<>();
                correctAnswer.add("Python");
                correctAnswer.add("Java");
                ListQuestion list1 = new ListQuestion("¿Cuáles de los siguientes son lenguajes de programación?",
                 possibleAnswers, correctAnswer);

                listQuestionRepository.save(list1);

                //Users
                userRepository.save(new User("alumno", "alumno"));
                userRepository.save(new User("profesor", "profesor", "ROLE_ADMIN"));

	}

}
