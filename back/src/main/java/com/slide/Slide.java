package com.slide;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public abstract class Slide {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    /*
    A slide has ONE text, image etc or could have more?
    private String text;
    private long imagePath;
    private String code;

    UML representation not decided yet
    private String uml;
    */

    public Slide() {}

    public abstract void update(Slide slide);

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    
}