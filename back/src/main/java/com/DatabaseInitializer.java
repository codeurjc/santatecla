package com;

import javax.annotation.PostConstruct;

import com.card.*;
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

	@PostConstruct
	public void init() {

                //Cards
                Card card1 = new Card("¿Que?");
                Card card2 = new Card("¿Que?");
                Card card3 = new Card("¿Que?");
                Card card4 = new Card("¿Cuándo?");

                card1.setText("Un lenguaje de programación es un lenguaje formal que proporciona una serie de instrucciones...");
                card4.setText("A finales de 1953, John Backus sometió una propuesta a sus superiores en IBM...");

                cardRepository.save(card1);
                cardRepository.save(card2);
                cardRepository.save(card3);
                cardRepository.save(card4);
  
                //Units
                Unit unit1 = new Unit("Programming language");
                Unit unit2 = new Unit("Java");
                Unit unit3 = new Unit("Python");
 
                unit1.getCards().add(card1);
                unit2.getCards().add(card2);
                unit3.getCards().add(card3);
                unit1.getCards().add(card4);
                
                unitRepository.save(unit1);
                unitRepository.save(unit2);
                unitRepository.save(unit3);

                //Slides
                TheorySlide slide1 = new TheorySlide();
                PracticeSlide slide2 = new PracticeSlide();

                slide1.getCards().add(card1);
                slide1.getCards().add(card4);

                slideRepository.save(slide1);
                slideRepository.save(slide2);

                //Itinerary
                Itinerary itinerary1 = new Itinerary("Introducción");
                Itinerary itinerary2 = new Itinerary("Distintos");

                itineraryRepository.save(itinerary2);

                itinerary1.getItineraries().add(itinerary2);

                itinerary1.getSlides().add(slide1);
                itinerary1.getSlides().add(slide2);

                itineraryRepository.save(itinerary1);

                //Users
                userRepository.save(new User("alumno", "alumno"));
                userRepository.save(new User("profesor", "profesor", "ROLE_ADMIN"));
	}

}
