package com;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import com.card.Card;
import com.card.CardRepository;
import com.itinerary.Itinerary;
import com.itinerary.ItineraryRepository;
import com.question.Question;
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
import com.slide.practiceSlide.PracticeSlide;
import com.slide.theorySlide.TheorySlide;
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
                Slide slide1 = new TheorySlide();
                Slide slide2 = new PracticeSlide();
                Slide slide3 = new TheorySlide();
                Slide slide4 = new PracticeSlide();

                ArrayList<Card> slide1Cards = new ArrayList<>();
                slide1Cards.add((Card)card1);
                slide1Cards.add((Card)card4);
                slide1.setComponents(slide1Cards);

                ArrayList<Question> slide2Questions = new ArrayList<>();
                slide2Questions.add((DefinitionQuestion)definition1);
                slide2Questions.add((ListQuestion)list1);
                slide2.setComponents(slide2Questions);

                ArrayList<Question> slide4Questions = new ArrayList<>();
                slide4Questions.add((TestQuestion)test);
                slide4.setComponents(slide4Questions);

                ArrayList<Card> slide3Cards = new ArrayList<>();
                slide3Cards.add((Card)card2);
                slide3Cards.add((Card)card3);
                slide3.setComponents(slide3Cards);

                slideRepository.save(slide1);
                slideRepository.save(slide2);
                slideRepository.save(slide3);
                slideRepository.save(slide4);

                //Itinerary
                Itinerary itinerary1 = new Itinerary("Introducción");
                Itinerary itinerary2 = new Itinerary("Introducción Java");

                itinerary2.getSlides().add(slide3);
                itinerary2.getSlides().add(slide4);

                itineraryRepository.save(itinerary2);

                itinerary1.getItineraries().add(itinerary2);

                itinerary1.getSlides().add(slide1);
                itinerary1.getSlides().add(slide2);

                itineraryRepository.save(itinerary1);

                //Units
                Unit unit0 = new Unit("Root");
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
                unit2.addItinerary(itinerary2);

                unitRepository.save(unit0);
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
                Relation relation0 = new Relation(Relation.RelationType.INHERITANCE, unit0.getId(), unit1.getId());
                relationRepository.save(relation0);
                unit0.addIncomingRelation(relation0);
                unit1.addOutgoingRelation(relation0);
                Relation relation1 = new Relation(Relation.RelationType.INHERITANCE, unit1.getId(), unit2.getId());
                relationRepository.save(relation1);
                unit1.addIncomingRelation(relation1);
                unit2.addOutgoingRelation(relation1);
                Relation relation2 = new Relation(Relation.RelationType.INHERITANCE, unit1.getId(), unit3.getId());
                relationRepository.save(relation2);
                unit1.addIncomingRelation(relation2);
                unit3.addOutgoingRelation(relation2);
                Relation relation3 = new Relation(Relation.RelationType.COMPOSITION, unit2.getId(), unit4.getId());
                relationRepository.save(relation3);
                unit2.addIncomingRelation(relation3);
                unit4.addOutgoingRelation(relation3);
                Relation relation4 = new Relation(Relation.RelationType.COMPOSITION, unit3.getId(), unit5.getId());
                relationRepository.save(relation4);
                unit3.addIncomingRelation(relation4);
                unit5.addOutgoingRelation(relation4);
                Relation relation6 = new Relation(Relation.RelationType.INHERITANCE, unit1.getId(), unit6.getId());
                relationRepository.save(relation6);
                unit1.addIncomingRelation(relation6);
                unit6.addOutgoingRelation(relation6);
                Relation relation7 = new Relation(Relation.RelationType.COMPOSITION, unit6.getId(), unit7.getId());
                relationRepository.save(relation7);
                unit6.addIncomingRelation(relation7);
                unit7.addOutgoingRelation(relation7);
                Relation relation8 = new Relation(Relation.RelationType.INHERITANCE, unit4.getId(), unit8.getId());
                relationRepository.save(relation8);
                unit4.addIncomingRelation(relation8);
                unit8.addOutgoingRelation(relation8);
                Relation relation9 = new Relation(Relation.RelationType.INHERITANCE, unit5.getId(), unit9.getId());
                relationRepository.save(relation9);
                unit5.addIncomingRelation(relation9);
                unit9.addOutgoingRelation(relation9);
                Relation relation10 = new Relation(Relation.RelationType.ASSOCIATION, unit9.getId(), unit5.getId());
                relationRepository.save(relation10);
                unit9.addIncomingRelation(relation10);
                unit5.addOutgoingRelation(relation10);

                unitRepository.save(unit0);
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
