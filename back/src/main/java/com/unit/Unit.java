package com.unit;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.card.Card;
import com.itinerary.Itinerary;
import com.relation.Relation;

@Entity
public class Unit{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String name;

    @OneToMany
    private List<Card> files;

    @ManyToMany
    private List<Itinerary> itineraries;

    @OneToMany
    private List<Relation> relations;

    public Unit(){}

    public Unit(String name){
        this.name = name;
        this.files = new ArrayList<>();
        this.itineraries = new ArrayList<>();
        this.relations = new ArrayList<>();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Card> getFiles() {
        return files;
    }

    public void setFiles(List<Card> files) {
        this.files = files;
    }

    public List<Itinerary> getItineraries() {
        return itineraries;
    }

    public void setItineraries(List<Itinerary> itineraries) {
        this.itineraries = itineraries;
    }

    public List<Relation> getRelations() {
        return relations;
    }

    public void setRelations(List<Relation> relations) {
        this.relations = relations;
    }

    

}