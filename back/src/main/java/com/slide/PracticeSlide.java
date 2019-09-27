package com.slide;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class PracticeSlide extends Slide{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    //@OneToMany
    //private List<Exercise> exercises;

    public PracticeSlide() {
        super();
        //this.exercises = new ArrayList<>();
    }

    public void update(Slide slide) { }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    /*public List<Exercise> getExercises() {
        return exercises;
    }

    public void setCards(List<Exercise> exercises) {
        this.exercises = exercises;
    }*/

    
}