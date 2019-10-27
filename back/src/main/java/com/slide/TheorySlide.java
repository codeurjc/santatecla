package com.slide;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.JViews.Summary;
import com.card.Card;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class TheorySlide extends Slide {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(Summary.class)
    protected long id;

    @OneToMany
    private List<Card> cards;

    public TheorySlide() {
        super();
        this.cards = new ArrayList<>();
    }

    public void update(Slide slide) { }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Card> getComponents() {
        return cards;
    }

    public void setComponents(List cards) {
        this.cards = cards;
    }

    
}