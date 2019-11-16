package com.unit;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.*;

import com.card.Card;
import com.question.definition.definition_question.DefinitionQuestion;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.item.Item;
import com.itinerary.Itinerary;
import com.question.list.list_question.ListQuestion;
import com.question.test.test_question.TestQuestion;
import com.relation.Relation;

@Entity
public class Unit {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String name;
    
    @OneToMany
    @JsonIgnore
    private Map<Long, Card> cards;

    @ManyToMany
    private List<Itinerary> itineraries;

    @OneToMany
    private List<Relation> incomingRelations;

    @OneToMany
    @OrderColumn
    private List<Relation> outgoingRelations;

    @ManyToMany
    private List<DefinitionQuestion> definitionQuestions;

    @ManyToMany
    private List<ListQuestion> listQuestions;

    @ManyToMany
    private List<TestQuestion> testQuestions;

    @OneToMany
    @JsonIgnore
    private List<Item> items;

    public Unit() {
        this.cards = new HashMap<>();
        this.itineraries = new ArrayList<>();
        this.incomingRelations = new ArrayList<>();
        this.outgoingRelations = new ArrayList<>();
        this.definitionQuestions = new ArrayList<>();
        this.listQuestions = new ArrayList<>();
        this.items = new ArrayList<>();
        this.testQuestions = new ArrayList<>();
    }

    public Unit(String name) {
        this();
        this.name = name;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Iterable<Card> getCards() {
        return this.cards.values();
    }

    public Card getCard(long id) {
        return this.cards.get(id);
    }

    public void addCard(Card card) {
        this.cards.put(card.getId(), card);
    }

    public List<Itinerary> getItineraries() {
        return this.itineraries;
    }

    public void addItinerary(Itinerary itinerary) {
        this.itineraries.add(itinerary);
    }

    public List<Relation> getIncomingRelations() {
        return this.incomingRelations;
    }

    public void addIncomingRelation(Relation incomingRelation) {
        if (!this.incomingRelations.contains(incomingRelation)) {
            int index = 0;
            for (Relation relation : this.incomingRelations) {
                if (Relation.compareType(incomingRelation.getRelationType(), relation.getRelationType()) <= 0) {
                    index++;
                    break;
                }
            }
            ArrayList<Relation> sublist = new ArrayList<>(this.incomingRelations.subList(index, this.incomingRelations.size()));
            this.incomingRelations.removeAll(sublist);
            this.incomingRelations.add(incomingRelation);
            this.incomingRelations.addAll(sublist);
        }
    }

    public List<Relation> getOutgoingRelations() {
        return this.outgoingRelations;
    }

    public void addOutgoingRelation(Relation outgoingRelation) {
        if (!this.outgoingRelations.contains(outgoingRelation)) {
            int index = 0;
            for (Relation relation : this.outgoingRelations) {
                if (Relation.compareType(outgoingRelation.getRelationType(), relation.getRelationType()) <= 0) {
                    index++;
                    break;
                }
            }
            ArrayList<Relation> sublist = new ArrayList<>(this.outgoingRelations.subList(index, this.outgoingRelations.size()));
            this.outgoingRelations.removeAll(sublist);
            this.outgoingRelations.add(outgoingRelation);
            this.outgoingRelations.addAll(sublist);
        }
    }

    public List<DefinitionQuestion> getDefinitionQuestions() {
        return this.definitionQuestions;
    }

    public void addDefinitionQuestion(DefinitionQuestion definitionQuestion) {
        this.definitionQuestions.add(definitionQuestion);
    }

    public void setDefinitionQuestions(List<DefinitionQuestion> definitionQuestions){
        this.definitionQuestions = definitionQuestions;
    }

    public List<ListQuestion> getListQuestions() {
        return this.listQuestions;
    }

    public void setListQuestions(List<ListQuestion> listQuestions) {
        this.listQuestions = listQuestions;
    }

    public List<Item> getItems() {
        return this.items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public List<TestQuestion> getTestQuestions() {
        return testQuestions;
    }

    public void setTestQuestions(List<TestQuestion> testQuestions) {
        this.testQuestions = testQuestions;
    }
}