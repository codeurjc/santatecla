package com.itinerary;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.definition.definition_question.DefinitionQuestion;
import com.list_question.ListQuestion;
import com.unit.Unit;
import com.view.View;

@Entity
public class Itinerary{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    @ManyToMany
    private List<Unit> units;

    @ManyToMany
    private List<Itinerary> itineraries;

    @OneToMany
    private List<View> views;

    @OneToMany
    private List<DefinitionQuestion> definitionQuestions;

    @OneToMany
    private List<ListQuestion> listQuestions;

    public Itinerary(){
        this.units = new ArrayList<>();
        this.itineraries = new ArrayList<>();
        this.views = new ArrayList<>();
        this.definitionQuestions = new ArrayList<>();
        this.listQuestions = new ArrayList<>();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Unit> getUnits() {
        return units;
    }

    public void setUnits(List<Unit> units) {
        this.units = units;
    }

    public List<Itinerary> getItineraries() {
        return itineraries;
    }

    public void setItineraries(List<Itinerary> itineraries) {
        this.itineraries = itineraries;
    }

    public List<View> getViews() {
        return views;
    }

    public void setViews(List<View> views) {
        this.views = views;
    }


}