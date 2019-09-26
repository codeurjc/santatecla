package com.card;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import org.apache.commons.lang3.StringUtils;

@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String name;

    private String text;

    @Lob
    private Byte[] image;

    public Card() {}

    public Card(String name) {
        this();
        this.name = name;
    }

    public long getId() {
        return id;
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

    public String getText() {
        return this.text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Byte[] getImage() {
        return this.image;
    }

    public void setImage(Byte[] image) {
        this.image = image;
    }

    public void update(Card card) {
        if (StringUtils.isNotBlank(card.getName())) {
            this.name = card.getName();
        }
        if (StringUtils.isNotBlank(card.getText())) {
            this.text = card.getText();
        }
    }

}