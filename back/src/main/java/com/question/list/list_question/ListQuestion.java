package com.question.list.list_question;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.JViews.Summary;
import com.fasterxml.jackson.annotation.JsonView;
import com.question.Question;

@Entity
public class ListQuestion extends Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(Summary.class)
    private long id;

    @ElementCollection
    private List<String> possibleAnswers;

    @ElementCollection
    private List<String> correctAnswers;

    public ListQuestion() {
        super();
        this.possibleAnswers = new ArrayList<>();
        this.correctAnswers = new ArrayList<>();
    }

    public ListQuestion(String questionText, List<String> possibleAnswers, List<String> correctAnswer) {
        super(questionText);
        this.possibleAnswers = possibleAnswers;
        this.correctAnswers = correctAnswer;
    }

    public void update(ListQuestion q) {
        if (q.getQuestionText() != null) {
            this.questionText = q.getQuestionText();
        }
        if (!q.getCorrectAnswers().equals(this.correctAnswers)) {
            this.correctAnswers = q.getCorrectAnswers();
        }
        if (!q.getPossibleAnswers().equals(this.possibleAnswers)) {
            this.possibleAnswers = q.getPossibleAnswers();
        }
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

    public List<String> getCorrectAnswers() {
        return this.correctAnswers;
    }

    public List<String> getPossibleAnswers() {
        return this.possibleAnswers;
    }

}