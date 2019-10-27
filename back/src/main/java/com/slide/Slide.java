package com.slide;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.JViews.Summary;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
public abstract class Slide {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(Summary.class)
    protected long id;

    private String type;

    public Slide() { 
        this.type = this.getClass().getSimpleName(); 
    }

    public abstract void update(Slide slide);

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public abstract List getComponents();

    public abstract void setComponents(List components);
    

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    
}