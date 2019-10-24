package com.question.test;

import com.question.Question;

import javax.persistence.ElementCollection;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

public class TestQuestion extends Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ElementCollection
    private List<String> possibleAnswers;

    private String correctAnswer;

    public TestQuestion() {
        super();
        this.possibleAnswers = new ArrayList<>();
    }

    public TestQuestion(String questionText, List<String> possibleAnswers, String correctAnswer) {
        super(questionText);
        this.possibleAnswers = possibleAnswers;
        this.correctAnswer = correctAnswer;
    }

    /**
     * Getters and Setters
     */

}
