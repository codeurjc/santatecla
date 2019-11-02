package com.card;

import javax.persistence.*;

import org.apache.commons.lang3.StringUtils;

@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String name;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String text;

    @Lob
    private Byte[] image;

    public Card() {}

    public Card(String name) {
        this();
        this.name = name;
    }

    public void update(Card card) {
        if (StringUtils.isNotBlank(card.getName())) {
            this.name = card.getName();
        }
        if (StringUtils.isNotBlank(card.getText())) {
            this.text = card.getText();
        }
    }

    /********************
     * GETTER AND SETTER *
     ********************/

    public long getId() {
        return id;
    }

    public String getName() {
        return this.name;
    }

    public String getText() {
        return this.text;
    }

    public Byte[] getImage() {
        return this.image;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setImage(Byte[] image) {
        this.image = image;
    }

}