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
                Unit unit1 = new Unit("Lenguaje de programación");
                Unit unit2 = new Unit("Java");
                Unit unit3 = new Unit("Python");
                Unit unit4 = new Unit("Expresión");
                Unit unit5 = new Unit("Expresión");
                Unit unit6 = new Unit("C++");
                Unit unit7 = new Unit("Expresión");
                Unit unit8 = new Unit("Suma");
                Unit unit9 = new Unit("Suma");

                unit1.addCard(card1);
                unit1.addCard(card4);
                unit2.addCard(card2);
                unit2.addCard(card3);
                
                unitRepository.save(unit1);
                unitRepository.save(unit2);
                unitRepository.save(unit3);
                unitRepository.save(unit4);
                unitRepository.save(unit5);
                unitRepository.save(unit6);
                unitRepository.save(unit7);
                unitRepository.save(unit8);
                unitRepository.save(unit9);

                //Relations
                Relation relation1 = new Relation(Relation.RelationType.INHERITANCE, unit2);
                relationRepository.save(relation1);
                unit1.addRelation(relation1);
                Relation relation2 = new Relation(Relation.RelationType.INHERITANCE, unit3);
                relationRepository.save(relation2);
                unit1.addRelation(relation2);
                Relation relation3 = new Relation(Relation.RelationType.COMPOSITION, unit4);
                relationRepository.save(relation3);
                unit2.addRelation(relation3);
                Relation relation4 = new Relation(Relation.RelationType.COMPOSITION, unit5);
                relationRepository.save(relation4);
                unit3.addRelation(relation4);
                Relation relation6 = new Relation(Relation.RelationType.INHERITANCE, unit6);
                relationRepository.save(relation6);
                unit1.addRelation(relation6);
                Relation relation7 = new Relation(Relation.RelationType.COMPOSITION, unit7);
                relationRepository.save(relation7);
                unit6.addRelation(relation7);
                Relation relation8 = new Relation(Relation.RelationType.INHERITANCE, unit8);
                relationRepository.save(relation8);
                unit4.addRelation(relation8);
                Relation relation9 = new Relation(Relation.RelationType.INHERITANCE, unit9);
                relationRepository.save(relation9);
                unit5.addRelation(relation9);

                unitRepository.save(unit1);
                unitRepository.save(unit2);
                unitRepository.save(unit3);
                unitRepository.save(unit4);
                unitRepository.save(unit5);
                unitRepository.save(unit6);
                unitRepository.save(unit7);
                unitRepository.save(unit8);
                unitRepository.save(unit9);

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

                //Users
                userRepository.save(new User("alumno", "alumno"));
                userRepository.save(new User("profesor", "profesor", "ROLE_ADMIN"));

	}

}
