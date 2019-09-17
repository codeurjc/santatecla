package com.itinerary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {
    
    public List<Itinerary> findAll();
    
}