package com.relation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.unit.Unit;

@Entity
public class Relation {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonIgnore
    protected long id;

    public enum RelationType {
        ASSOCIATION, AGGREGATION, COMPOSITION, INHERITANCE;
    };

    private RelationType relationType;

    @OneToOne
    private Unit relatedTo;

    public Relation() {}

    public Relation(RelationType relationType, Unit relatedTo) {
        this.relationType = relationType;
        this.relatedTo = relatedTo;
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