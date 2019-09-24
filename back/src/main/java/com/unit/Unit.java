package com.unit;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.card.Card;
import com.definition_question.DefinitionQuestion;
import com.item.Item;
import com.itinerary.Itinerary;
import com.list_question.ListQuestion;
import com.relation.Relation;

@Entity
public class Unit{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String name;

    @OneToMany
    private List<Card> cards;

    @ManyToMany
    private List<Itinerary> itineraries;

    @OneToMany
    private List<Relation> relations;

    @OneToMany
    private List<DefinitionQuestion> definitionQuestions;

    @OneToMany
    private List<ListQuestion> listQuestions;

    @OneToMany
    private List<Item> items;

    public Unit(){}

    public Unit(String name){
        this.name = name;
        this.cards = new ArrayList<>();
        this.itineraries = new ArrayList<>();
        this.relations = new ArrayList<>();
        this.definitionQuestions = new ArrayList<>();
        this.listQuestions = new ArrayList<>();
        this.items = new ArrayList<>();
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

    public List<DefinitionQuestion> getDefinitionQuestions() {
        return definitionQuestions;
    }

    public void setDefinitionQuestions(List<DefinitionQuestion> definitionQuestions) {
        this.definitionQuestions = definitionQuestions;
    }

    public List<ListQuestion> getListQuestions() {
        return listQuestions;
    }

    public void setListQuestions(List<ListQuestion> listQuestions) {
        this.listQuestions = listQuestions;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public List<Card> getCards() {
        return cards;
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }
    

}