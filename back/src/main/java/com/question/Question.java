package com.question;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    protected String subtype;
    protected String questionText;

    protected int totalAnswers;
    protected int totalCorrectAnswers;
    protected int totalWrongAnswers;

    public Question() {
        this.subtype = this.getClass().getSimpleName();
        this.totalAnswers = 0;
        this.totalCorrectAnswers = 0;
        this.totalWrongAnswers = 0;
    }

    public Question(String questionText) {
        this();
        this.questionText = questionText;
    }

    /**
     * Getters and Setters
     */

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestionText() {
        return questionText;
    }

    public String getSubtype() {
        return subtype;
    }

}