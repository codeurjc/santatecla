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
/*
                //Cards
                Card card1 = new Card("Qué es");
                Card card2 = new Card("Qué es");
                Card card3 = new Card("Cuándo se creó");
                Card card4 = new Card("Cuándo se creó");

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

                slide1.addContent("Hola\n\n");
                slide2.addContent("Adios\n\n");

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
                Module module4 = new Module("Tema 2.1");
                Module module5 = new Module("Tema 2.2");

                moduleRepository.save(module1);
                moduleRepository.save(module2);
                moduleRepository.save(module3);
                moduleRepository.save(module4);
                moduleRepository.save(module5);

                module1.addBlock(lesson1);
                module2.addBlock(lesson2);
                module2.addBlock(lesson3);
                module4.addBlock(lesson1);

                module2.addBlock(module4);
                module2.addBlock(module5);
                module3.addBlock(module1);
                module3.addBlock(module2);
                module3.addBlock(lesson1);

                moduleRepository.save(module1);
                moduleRepository.save(module2);
                moduleRepository.save(module3);
                moduleRepository.save(module4);
                moduleRepository.save(module5);


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
*/
                //Units
                List<Unit> units = new ArrayList<>();
                Unit unit1 = new Unit("Paradigma de programación");
                units.add(unit1);
                Unit unit2 = new Unit("Programación funcional");
                units.add(unit2);
                Unit unit3 = new Unit("Programación imperativa estructurada");
                units.add(unit3);
                Unit unit4 = new Unit("Lenguaje de programación");
                units.add(unit4);
                Unit unit5 = new Unit("Haskell");
                units.add(unit5);
                Unit unit6 = new Unit("Java");
                units.add(unit6);
                Unit unit7 = new Unit("Python");
                units.add(unit7);
                Unit unit8 = new Unit("Función");
                units.add(unit8);
                Unit unit9 = new Unit("Función recursiva");
                units.add(unit9);
                Unit unit10 = new Unit("Función recursiva lineal");
                units.add(unit10);
                Unit unit11 = new Unit("Función recursiva no lineal");
                units.add(unit11);
                Unit unit12 = new Unit("Función de orden superior");
                units.add(unit12);
                Unit unit13 = new Unit("Tipo de dato");
                units.add(unit13);
                Unit unit14 = new Unit("Clase");
                units.add(unit14);
                Unit unit15 = new Unit("Lenguaje interpretado");
                units.add(unit15);
                Unit unit16 = new Unit("Array");
                units.add(unit16);
                Unit unit17 = new Unit("Fichero");
                units.add(unit17);
                Unit unit18 = new Unit("Sistema de información");
                units.add(unit18);
                Unit unit19 = new Unit("ERP");
                units.add(unit19);
                Unit unit20 = new Unit("CRM");
                units.add(unit20);
/*
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
                unit4.addLesson(lesson3);

                unit1.getModules().add(module1);
                unit1.getModules().add(module2);
                unit1.getModules().add(module3);
                unit1.getModules().add(module4);
                unit1.getModules().add(module5);
*/
                for (Unit unit : units) {
                        unitRepository.save(unit);
                }

                //Relations
                Relation relation1 = new Relation(Relation.RelationType.INHERITANCE, unit1.getId(), unit2.getId());
                relationRepository.save(relation1);
                unit1.addIncomingRelation(relation1);
                unit2.addOutgoingRelation(relation1);
                Relation relation2 = new Relation(Relation.RelationType.INHERITANCE, unit1.getId(), unit3.getId());
                relationRepository.save(relation2);
                unit1.addIncomingRelation(relation2);
                unit3.addOutgoingRelation(relation2);
                Relation relation3 = new Relation(Relation.RelationType.ASSOCIATION, unit3.getId(), unit6.getId());
                relationRepository.save(relation3);
                unit3.addIncomingRelation(relation3);
                unit6.addOutgoingRelation(relation3);
                Relation relation4 = new Relation(Relation.RelationType.AGGREGATION, unit6.getId(), unit16.getId());
                relationRepository.save(relation4);
                unit6.addIncomingRelation(relation4);
                unit16.addOutgoingRelation(relation4);
                Relation relation5 = new Relation(Relation.RelationType.AGGREGATION, unit6.getId(), unit17.getId());
                relationRepository.save(relation5);
                unit6.addIncomingRelation(relation5);
                unit17.addOutgoingRelation(relation5);
                Relation relation6 = new Relation(Relation.RelationType.AGGREGATION, unit6.getId(), unit8.getId());
                relationRepository.save(relation6);
                unit6.addIncomingRelation(relation6);
                unit8.addOutgoingRelation(relation6);
                Relation relation7 = new Relation(Relation.RelationType.INHERITANCE, unit4.getId(), unit5.getId());
                relationRepository.save(relation7);
                unit4.addIncomingRelation(relation7);
                unit5.addOutgoingRelation(relation7);
                Relation relation8 = new Relation(Relation.RelationType.INHERITANCE, unit2.getId(), unit5.getId());
                relationRepository.save(relation8);
                unit2.addIncomingRelation(relation8);
                unit5.addOutgoingRelation(relation8);
                Relation relation9 = new Relation(Relation.RelationType.ASSOCIATION, unit2.getId(), unit5.getId());
                relationRepository.save(relation9);
                unit2.addIncomingRelation(relation9);
                unit5.addOutgoingRelation(relation9);
                Relation relation10 = new Relation(Relation.RelationType.AGGREGATION, unit5.getId(), unit8.getId());
                relationRepository.save(relation10);
                unit5.addIncomingRelation(relation10);
                unit8.addOutgoingRelation(relation10);
                Relation relation11 = new Relation(Relation.RelationType.AGGREGATION, unit5.getId(), unit8.getId());
                relationRepository.save(relation11);
                unit5.addIncomingRelation(relation11);
                unit8.addOutgoingRelation(relation11);
                Relation relation12 = new Relation(Relation.RelationType.INHERITANCE, unit8.getId(), unit9.getId());
                relationRepository.save(relation12);
                unit8.addIncomingRelation(relation12);
                unit9.addOutgoingRelation(relation12);
                Relation relation13 = new Relation(Relation.RelationType.INHERITANCE, unit8.getId(), unit12.getId());
                relationRepository.save(relation13);
                unit8.addIncomingRelation(relation13);
                unit12.addOutgoingRelation(relation13);
                Relation relation14 = new Relation(Relation.RelationType.INHERITANCE, unit9.getId(), unit10.getId());
                relationRepository.save(relation14);
                unit9.addIncomingRelation(relation14);
                unit10.addOutgoingRelation(relation14);
                Relation relation15 = new Relation(Relation.RelationType.INHERITANCE, unit9.getId(), unit11.getId());
                relationRepository.save(relation15);
                unit11.addIncomingRelation(relation15);
                unit11.addOutgoingRelation(relation15);
                Relation relation16 = new Relation(Relation.RelationType.AGGREGATION, unit5.getId(), unit14.getId());
                relationRepository.save(relation16);
                unit5.addIncomingRelation(relation16);
                unit14.addOutgoingRelation(relation16);
                Relation relation17 = new Relation(Relation.RelationType.AGGREGATION, unit5.getId(), unit13.getId());
                relationRepository.save(relation17);
                unit5.addIncomingRelation(relation17);
                unit13.addOutgoingRelation(relation17);
                Relation relation18 = new Relation(Relation.RelationType.INHERITANCE, unit4.getId(), unit15.getId());
                relationRepository.save(relation18);
                unit4.addIncomingRelation(relation18);
                unit15.addOutgoingRelation(relation18);
                Relation relation19 = new Relation(Relation.RelationType.INHERITANCE, unit15.getId(), unit7.getId());
                relationRepository.save(relation19);
                unit15.addIncomingRelation(relation19);
                unit7.addOutgoingRelation(relation19);
                Relation relation20 = new Relation(Relation.RelationType.AGGREGATION, unit7.getId(), unit8.getId());
                relationRepository.save(relation20);
                unit7.addIncomingRelation(relation20);
                unit8.addOutgoingRelation(relation20);
                Relation relation21 = new Relation(Relation.RelationType.AGGREGATION, unit7.getId(), unit13.getId());
                relationRepository.save(relation21);
                unit7.addIncomingRelation(relation21);
                unit13.addOutgoingRelation(relation21);
                Relation relation22 = new Relation(Relation.RelationType.AGGREGATION, unit7.getId(), unit17.getId());
                relationRepository.save(relation22);
                unit7.addIncomingRelation(relation22);
                unit17.addOutgoingRelation(relation22);

                for (Unit unit : units) {
                        unitRepository.save(unit);
                }


                //Users
                User user1 = new User("alumno", "alumno", "ROLE_USER");
                User user2 = new User("David", "alumno", "ROLE_USER");
                userRepository.save(user1);
                userRepository.save(user2);
                User teacher = new User("profesor", "profesor", "ROLE_ADMIN");
                userRepository.save(teacher);
/*
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
*/
	}

}
