package com;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import com.card.Card;
import com.card.CardRepository;
import com.course.Course;
import com.course.CourseRepository;
import com.itinerary.lesson.Lesson;
import com.itinerary.lesson.LessonRepository;
import com.itinerary.module.Module;
import com.itinerary.module.ModuleRepository;
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
        private LessonRepository lessonRepository;
    
        @Autowired
        private UnitRepository unitRepository;

        @Autowired
        private ModuleRepository moduleRepository;
    
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
  
        @Autowired
        private CourseRepository courseRepository;

        @PostConstruct
        public void init() {

                //Cards
                Card card1 = new Card("¿Qué es un lenguaje de programación?");
                Card card2 = new Card("¿Qué es java?");
                Card card3 = new Card("¿Cuándo se creó el primer lenguaje de programación?");
                Card card4 = new Card("¿Cuándo se creó java?");

                card1.setContent("Un *lenguaje de programación* es un lenguaje formal (o artificial, es decir, un lenguaje con reglas gramaticales bien definidas) que le proporciona a una persona, en este caso el programador, la capacidad de escribir (o programar) una serie de *instrucciones o secuencias* de órdenes en forma de algoritmos con el fin de controlar el comportamiento físico y/o lógico de una computadora, de manera que se puedan obtener diversas clases de datos. A todo este conjunto de órdenes escritas mediante un lenguaje de programación se le denomina *programa*.");
                card2.setContent("Java es...");
                card4.setContent("*A finales de 1953*, John Backus sometió una propuesta a sus superiores en IBM para desarrollar una alternativa más práctica al lenguaje ensamblador, para programar la computadora central IBM 704. El histórico equipo Fortran de Backus consistió en los programadores Richard Goldberg, Sheldon F. Best, Harlan Herrick, Peter Sheridan, Roy Nutt, Robert Nelson, Irving Ziller, Lois Haibt y David Sayre.");
                card3.setContent("Java se creó en...");

                cardRepository.save(card1);
                cardRepository.save(card2);
                cardRepository.save(card3);
                cardRepository.save(card4);

                //Slides
                Slide slide1 = new Slide("Saludos");
                Slide slide2 = new Slide("Despedidas");

                slide1.addContent("Hola");
                slide2.addContent("Adios");

                slideRepository.save(slide1);
                slideRepository.save(slide2);

                //Lesson
                Lesson lesson1 = new Lesson("Introducción a lenguajes de programción");
                Lesson lesson2 = new Lesson("Introducción Java");
                Lesson lesson3 = new Lesson("Introducción C++");

                lesson1.getSlides().add(slide1);
                lesson1.getSlides().add(slide2);

                lesson2.getSlides().add(slide1);
                lesson2.getSlides().add(slide2);

                lesson3.getSlides().add(slide1);
                lesson3.getSlides().add(slide2);

                lessonRepository.save(lesson1);
                lessonRepository.save(lesson2);
                lessonRepository.save(lesson3);

                //Modules
                Module module1 = new Module("Tema 1");
                Module module2 = new Module("Tema 2");
                Module module3 = new Module("Paradigmas");

                module1.addBlock(lesson1);
                module2.addBlock(lesson2);
                module2.addBlock(lesson3);

                module3.addBlock(module1);
                module3.addBlock(module2);
                module3.addBlock(lesson1);

                moduleRepository.save(module1);
                moduleRepository.save(module2);
                moduleRepository.save(module3);

                // Definition Questions
                DefinitionQuestion definition1 = new DefinitionQuestion("¿Qué es el software?");
                definition1.addModule(module1);
                DefinitionQuestion definition2 = new DefinitionQuestion("¿Qué es Java?");
                definition1.addModule(module2);

                definitionQuestionRepository.save(definition1);
                definitionQuestionRepository.save(definition2);

                // List Questions
                ArrayList<String> possibleAnswers = new ArrayList<>();
                possibleAnswers.add("Java");
                possibleAnswers.add("Javascript");
                possibleAnswers.add("Python");
                ArrayList<String> correctAnswer = new ArrayList<>();
                correctAnswer.add("Python");
                correctAnswer.add("Java");
                ListQuestion list1 = new ListQuestion("¿Cuáles de los siguientes son lenguajes de programación?",
                        possibleAnswers, correctAnswer);
                list1.addModule(module1);

                listQuestionRepository.save(list1);

                //Test Questions
                List<String> testAnswers = new ArrayList<>();
                testAnswers.add("Sí");
                testAnswers.add("No");
                TestQuestion test = new TestQuestion("¿Es Java un lenguaje de programación?", testAnswers, "Sí");
                test.addModule(module1);

                testQuestionRepository.save(test);

                //Units
                Unit unit1 = new Unit("Lenguaje de programación");
                Unit unit2 = new Unit("Java");
                Unit unit3 = new Unit("Python");
                Unit unit4 = new Unit("C");
                Unit unit5 = new Unit("Expresión");
                Unit unit6 = new Unit("Variable");
                Unit unit7 = new Unit("Suma");
                Unit unit8 = new Unit("Resta");
                Unit unit9 = new Unit("Tipo de dato");
                Unit unit10 = new Unit("Entero");
                Unit unit11 = new Unit("Real");
                Unit unit12 = new Unit("Lenguaje corporal");
                Unit unit13 = new Unit("Expresión");

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

                unit1.addLesson(lesson1);
                unit2.addLesson(lesson2);

                unitRepository.save(unit1);
                unitRepository.save(unit2);
                unitRepository.save(unit3);
                unitRepository.save(unit4);
                unitRepository.save(unit5);
                unitRepository.save(unit6);
                unitRepository.save(unit7);
                unitRepository.save(unit8);
                unitRepository.save(unit9);
                unitRepository.save(unit10);
                unitRepository.save(unit11);
                unitRepository.save(unit12);
                unitRepository.save(unit13);

                //Relations
                Relation relation1 = new Relation(Relation.RelationType.INHERITANCE, unit1.getId(), unit2.getId());
                relationRepository.save(relation1);
                unit1.addIncomingRelation(relation1);
                unit2.addOutgoingRelation(relation1);
                Relation relation2 = new Relation(Relation.RelationType.INHERITANCE, unit1.getId(), unit3.getId());
                relationRepository.save(relation2);
                unit1.addIncomingRelation(relation2);
                unit3.addOutgoingRelation(relation2);
                Relation relation3 = new Relation(Relation.RelationType.COMPOSITION, unit2.getId(), unit5.getId());
                relationRepository.save(relation3);
                unit2.addIncomingRelation(relation3);
                unit5.addOutgoingRelation(relation3);
                Relation relation4 = new Relation(Relation.RelationType.COMPOSITION, unit3.getId(), unit5.getId());
                relationRepository.save(relation4);
                unit3.addIncomingRelation(relation4);
                unit5.addOutgoingRelation(relation4);
                Relation relation6 = new Relation(Relation.RelationType.INHERITANCE, unit1.getId(), unit4.getId());
                relationRepository.save(relation6);
                unit1.addIncomingRelation(relation6);
                unit4.addOutgoingRelation(relation6);
                Relation relation7 = new Relation(Relation.RelationType.AGGREGATION, unit4.getId(), unit5.getId());
                relationRepository.save(relation7);
                unit4.addIncomingRelation(relation7);
                unit5.addOutgoingRelation(relation7);
                Relation relation8 = new Relation(Relation.RelationType.AGGREGATION, unit4.getId(), unit6.getId());
                relationRepository.save(relation8);
                unit4.addIncomingRelation(relation8);
                unit6.addOutgoingRelation(relation8);
                Relation relation9 = new Relation(Relation.RelationType.INHERITANCE, unit5.getId(), unit7.getId());
                relationRepository.save(relation9);
                unit5.addIncomingRelation(relation9);
                unit7.addOutgoingRelation(relation9);
                Relation relation10 = new Relation(Relation.RelationType.INHERITANCE, unit5.getId(), unit8.getId());
                relationRepository.save(relation10);
                unit5.addIncomingRelation(relation10);
                unit8.addOutgoingRelation(relation10);
                Relation relation11 = new Relation(Relation.RelationType.INHERITANCE, unit5.getId(), unit7.getId());
                relationRepository.save(relation11);
                unit5.addIncomingRelation(relation11);
                unit7.addOutgoingRelation(relation11);
                Relation relation12 = new Relation(Relation.RelationType.USE, unit6.getId(), unit9.getId());
                relationRepository.save(relation12);
                unit6.addIncomingRelation(relation12);
                unit9.addOutgoingRelation(relation12);
                Relation relation13 = new Relation(Relation.RelationType.INHERITANCE, unit9.getId(), unit10.getId());
                relationRepository.save(relation13);
                unit9.addIncomingRelation(relation13);
                unit10.addOutgoingRelation(relation13);
                Relation relation14 = new Relation(Relation.RelationType.INHERITANCE, unit9.getId(), unit11.getId());
                relationRepository.save(relation14);
                unit9.addIncomingRelation(relation14);
                unit11.addOutgoingRelation(relation14);
                Relation relation15 = new Relation(Relation.RelationType.COMPOSITION, unit12.getId(), unit13.getId());
                relationRepository.save(relation15);
                unit12.addIncomingRelation(relation15);
                unit13.addOutgoingRelation(relation15);

                unitRepository.save(unit1);
                unitRepository.save(unit2);
                unitRepository.save(unit3);
                unitRepository.save(unit4);
                unitRepository.save(unit5);
                unitRepository.save(unit6);
                unitRepository.save(unit7);
                unitRepository.save(unit8);
                unitRepository.save(unit9);
                unitRepository.save(unit10);
                unitRepository.save(unit11);
                unitRepository.save(unit12);
                unitRepository.save(unit13);

                //Users
                User user1 = new User("alumno", "alumno", "ROLE_USER");
                User user2 = new User("David", "alumno", "ROLE_USER");
                userRepository.save(user1);
                userRepository.save(user2);
                User teacher = new User("profesor", "profesor", "ROLE_ADMIN");
                userRepository.save(teacher);

                // Courses
                Course course = new Course("Lenguajes de programación", teacher, "Aprende lo básico de los lenguajes de programación más usados.");
                course.addStudent(user1);
                course.addStudent(user2);
                course.setModule(module3);
                courseRepository.save(course);

                Course course2 = new Course("Curso de Java", teacher, "Aprende todo lo necesario para ser un experto en Java.");
                course2.addStudent(user1);
                course2.setModule(module3);
                courseRepository.save(course2);

	}

}
