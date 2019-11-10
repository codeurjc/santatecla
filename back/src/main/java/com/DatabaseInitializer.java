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

                card1.setContent("*¿Que es un lenguaje de programación?*\n\nUn lenguaje de programación es un lenguaje formal (o artificial, es decir, un lenguaje con reglas gramaticales bien definidas) que le proporciona a una persona, en este caso el programador, la capacidad de escribir (o programar) una serie de instrucciones o secuencias de órdenes en forma de algoritmos con el fin de controlar el comportamiento físico y/o lógico de una computadora, de manera que se puedan obtener diversas clases de datos. A todo este conjunto de órdenes escritas mediante un lenguaje de programación se le denomina programa.");
                card2.setContent("*¿Que es java?*\n");
                card4.setContent("*¿Cuando se creo el primer lenguaje de programación?*\n\nA finales de 1953, John Backus sometió una propuesta a sus superiores en IBM para desarrollar una alternativa más práctica al lenguaje ensamblador, para programar la computadora central IBM 704. El histórico equipo Fortran de Backus consistió en los programadores Richard Goldberg, Sheldon F. Best, Harlan Herrick, Peter Sheridan, Roy Nutt, Robert Nelson, Irving Ziller, Lois Haibt y David Sayre.");
                card3.setContent("*¿Cuando se creo java?*\n");

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

                slide1.addContent("assert.card/Que/12\n\nassert.card/Cuando/12\n\n");
                slide2.addContent("* Lenguaje Maquina\n" +
                        "\n" +
                        "Es el más primitivo de los códigos y se basa en la numeración binaria, todo en 0 y 1. Este lenguaje es utilizado directamente por máquinas o computadora.\n" +
                        "\n" +
                        "* Lenguajes de programación de bajo nivel\n" +
                        "\n" +
                        "Es un lenguaje un poco más fácil de interpretar, pero puede variar de acuerdo a la máquina o computadora que se esté programando.\n" +
                        "\n" +
                        "* Lenguajes de programación de alto nivel\n" +
                        "\n" +
                        "- Primera generación: el lenguaje máquina y el ensamblador.\n" +
                        "- Segunda generación: aquí encontramos los primeros lenguajes de programación de alto nivel, ejemplos de ellos son FORTRAN, COBOL.\n" +
                        "- Tercera generación: en esta generación encontramos los lenguajes de programación de alto nivel imperativo, pero mucho más utilizados y vigentes en la actualidad (ALGOL 8, PL/I, PASCAL, MODULA).\n" +
                        "- Cuarta generación: más cercanos a la época actual, es común encontrarlos en aplicaciones de gestión y manejo de bases de datos (NATURAL, SQL).\n" +
                        "- Quinta generación: estos son los más avanzados y fueron pensado para la inteligencia artificial y para el procesamiento de lenguajes naturales (LISP, PROLOG).\n" +
                        "\n");

                slideRepository.save(slide1);
                slideRepository.save(slide2);

                //Itinerary
                Itinerary itinerary1 = new Itinerary("Introducción");

                itinerary1.getSlides().add(slide1);
                itinerary1.getSlides().add(slide2);

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
