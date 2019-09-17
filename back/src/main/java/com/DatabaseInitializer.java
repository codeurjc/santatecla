package com;

import javax.annotation.PostConstruct;

import com.card.*;
import com.itinerary.*;
import com.relation.*;
import com.unit.*;
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

	}

}