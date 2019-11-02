package com;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.xml.soap.Text;

import com.card.Card;
import com.card.CardRepository;
import com.itinerary.Itinerary;
import com.itinerary.ItineraryRepository;
import com.question.Question;
import com.question.QuestionRepository;
import com.question.definition.definition_question.DefinitionQuestion;
import com.question.definition.definition_question.DefinitionQuestionRepository;
import com.question.list.list_question.ListQuestion;
import com.question.list.list_question.ListQuestionRepository;
import com.question.test.test_question.TestQuestion;
import com.question.test.test_question.TestQuestionRepository;
import com.relation.Relation;
import com.relation.RelationRepository;
import com.slide.Slide;
import com.slide.SlideRepository;
import com.unit.Unit;
import com.unit.UnitRepository;
import com.user.User;
import com.user.UserRepository;

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
        private DefinitionQuestionRepository definitionQuestionRepository;

        @Autowired
        private ListQuestionRepository listQuestionRepository;

        @Autowired
        private TestQuestionRepository testQuestionRepository;

	@PostConstruct
	public void init() {

                //Cards
                Card card1 = new Card("Que");
                Card card2 = new Card("Que");
                Card card3 = new Card("Cuando");
                Card card4 = new Card("Cuando");

                cardRepository.save(card1);
                cardRepository.save(card2);
                cardRepository.save(card3);
                cardRepository.save(card4);

                // Definition Questions
                DefinitionQuestion definition1 = new DefinitionQuestion("¿Qué es el software?");
                DefinitionQuestion definition2 = new DefinitionQuestion("¿Qué es Java?");

                definitionQuestionRepository.save(definition1);
                definitionQuestionRepository.save(definition2);

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

                //Test Questions
                List<String> testAnswers = new ArrayList<>();
                testAnswers.add("Sí");
                testAnswers.add("No");
                TestQuestion test = new TestQuestion("¿Es Java un lenguaje de programación?", testAnswers, "Sí");

                testQuestionRepository.save(test);

                //Slides
                Slide slide1 = new Slide("Concepto");
                Slide slide2 = new Slide("Tipos");

                slideRepository.save(slide1);
                slideRepository.save(slide2);

                //Itinerary
                Itinerary itinerary1 = new Itinerary("Introducción");

                itinerary1.getSlides().add(slide2);
                itinerary1.getSlides().add(slide1);

                itineraryRepository.save(itinerary1);
  
                //Units
                Unit unit1 = new Unit("Lenguaje de programación");
                Unit unit2 = new Unit("Java");
                Unit unit3 = new Unit("Python");
                Unit unit4 = new Unit("Expresión");
                Unit unit5 = new Unit("Expresión");
                Unit unit6 = new Unit("C");
                Unit unit7 = new Unit("Expresión");
                Unit unit8 = new Unit("Suma");
                Unit unit9 = new Unit("Suma");

                ArrayList<DefinitionQuestion> unit1Questions = new ArrayList<>();
                unit1Questions.add((DefinitionQuestion)definition1);
                //unit1Questions.add((DefinitionQuestion)definition3);
                ArrayList<ListQuestion> unit1ListQuestions = new ArrayList<>();
                unit1ListQuestions.add((ListQuestion)list1);
                ArrayList<TestQuestion> unitTestQuestions = new ArrayList<>();
                unitTestQuestions.add(test);

                unit1.setDefinitionQuestions(unit1Questions);
                unit1.setListQuestions(unit1ListQuestions);
                unit1.setTestQuestions(unitTestQuestions);
                unit2.setTestQuestions(unitTestQuestions);

                unit1.addCard(card1);
                unit1.addCard(card4);
                unit2.addCard(card2);
                unit2.addCard(card3);

                unit1.addItinerary(itinerary1);

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

                //Users
                userRepository.save(new User("alumno", "alumno"));
                userRepository.save(new User("profesor", "profesor", "ROLE_ADMIN"));

	}

}
