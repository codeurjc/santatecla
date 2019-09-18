package com.relation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.unit.Unit;

@Entity
public class Relation{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private enum RelationType {
        HERITAGE, COMPOSITION, ASSOCIATION, USE;
    };

    private RelationType relationType;

    @OneToOne
    private Unit relatedTo;

    public Relation(){}

    public Relation(RelationType t){
        this.relationType = t;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public RelationType getType() {
        return relationType;
    }

    public void setType(RelationType type) {
        this.relationType = type;
    }

    public Unit getRelatedTo() {
        return relatedTo;
    }

    public void setRelatedTo(Unit relatedTo) {
        this.relatedTo = relatedTo;
    }

    
}