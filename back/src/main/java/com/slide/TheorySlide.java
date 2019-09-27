package com.slide;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.card.Card;

@Entity
public class TheorySlide extends Slide {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    @OneToMany
    private List<Card> cards;

    /*
    A slide has ONE text, image etc or could have more?
    private String text;
    private long imagePath;
    private String code;

    UML representation not decided yet
    private String uml;
    */

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

    public List<Card> getCards() {
        return cards;
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }

    
}