package com.itinerary;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.unit.Unit;
import com.slide.Slide;

@Entity
public class Itinerary{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String name;

    // @ManyToMany
    // private List<Unit> units;

    @ManyToMany
    private List<Itinerary> itineraries;

    @OneToMany
    private List<Slide> slides;

    public Itinerary(){
    }

    public Itinerary(String name){
        this.name = name;
        // this.units = new ArrayList<>();
        this.itineraries = new ArrayList<>();
        this.slides = new ArrayList<>();
    }

    public void update(Itinerary itinerary) {}
    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    /*
    public List<Unit> getUnits() {
        return units;
    }

    public void setUnits(List<Unit> units) {
        this.units = units;
    }
    */

    public List<Itinerary> getItineraries() {
        return itineraries;
    }

    public void setItineraries(List<Itinerary> itineraries) {
        this.itineraries = itineraries;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Slide> getSlides() {
        return slides;
    }

    public void setSlides(List<Slide> slides) {
        this.slides = slides;
    }


}