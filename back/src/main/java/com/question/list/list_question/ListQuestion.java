package com.question.list.list_question;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.JViews.Summary;
import com.fasterxml.jackson.annotation.JsonView;
import com.question.Question;
import com.question.list.list_answer.ListAnswer;

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

    @OneToMany(cascade = CascadeType.ALL)
    private List<ListAnswer> listAnswers;

    public ListQuestion() {
        super();
        this.possibleAnswers = new ArrayList<>();
        this.correctAnswers = new ArrayList<>();
        this.listAnswers = new ArrayList<>();
    }

    public ListQuestion(String questionText, List<String> possibleAnswers, List<String> correctAnswer) {
        super(questionText);
        this.possibleAnswers = possibleAnswers;
        this.correctAnswers = correctAnswer;
        this.listAnswers = new ArrayList<>();
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

    public void addAnswer(ListAnswer answer) {
        this.listAnswers.add(answer);
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

    public List<String> getPossibleAnswers() {
        return possibleAnswers;
    }

    public void setPossibleAnswers(List<String> possibleAnswers) {
        this.possibleAnswers = possibleAnswers;
    }

    public List<String> getCorrectAnswers() {
        return correctAnswers;
    }

    public void setCorrectAnswers(List<String> correctAnswers) {
        this.correctAnswers = correctAnswers;
    }

    public List<ListAnswer> getListAnswers() {
        return listAnswers;
    }

    public void setListAnswers(List<ListAnswer> listAnswers) {
        this.listAnswers = listAnswers;
    }
}