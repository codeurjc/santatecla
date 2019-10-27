package com.slide;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.question.Question;

@Entity
public class PracticeSlide extends Slide{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    @OneToMany
    private List<Question> questions;

    public PracticeSlide() {
        super();
        this.questions = new ArrayList<>();
    }

    public void update(Slide slide) { }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Question> getComponents() {
        return questions;
    }

    public void setComponents(List questions) {
        this.questions = questions;
    }


    
}