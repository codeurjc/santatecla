package com.itinerary;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.apache.commons.lang3.StringUtils;

import com.JViews.Summary;
import com.fasterxml.jackson.annotation.JsonView;
import com.slide.Slide;

@Entity
public class Itinerary{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(Summary.class)
    protected long id;

    @JsonView(Summary.class)
    private String name;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String text;

    /*@JsonView(Summary.class)
    @OneToMany
    private List<Slide> slides;*/

    @JsonView(Summary.class)
    @ManyToMany
    private List<Itinerary> itineraries;

    public Itinerary(){}

    public Itinerary(String name){
        this.name = name;
        this.itineraries = new ArrayList<>();
        //this.slides = new ArrayList<>();
    }

    public void update(Itinerary itinerary) {
        this.name = itinerary.getName();
        this.text = itinerary.getText();
    }

    /********************
     * GETTER AND SETTER *
     ********************/

    public long getId() {
        return id;
    }

    public List<Itinerary> getItineraries() {
        return itineraries;
    }

    public String getName() {
        return name;
    }

    /*public List<Slide> getSlides() {
        return slides;
    }*/

    public String getText() {
        return text;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setItineraries(List<Itinerary> itineraries) {
        this.itineraries = itineraries;
    }

    public void setName(String name) {
        this.name = name;
    }


    /*public void setSlides(List<Slide> slides) {
        this.slides = slides;
    }*/

    public void setText(String text) {
        this.text = text;
    }
}