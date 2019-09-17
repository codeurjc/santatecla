package com.relation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.unit.Unit;

@Entity
public class Relation{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private enum Type {
        HERITAGE, COMPOSITION, ASSOCIATION, USE;
    };

    private Type type;

    private Unit relatedTo;

    public Relation(){}

    public Relation(Type t){
        this.type = t;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Unit getRelatedTo() {
        return relatedTo;
    }

    public void setRelatedTo(Unit relatedTo) {
        this.relatedTo = relatedTo;
    }

    
}