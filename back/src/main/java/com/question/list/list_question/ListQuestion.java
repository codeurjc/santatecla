package com.question.list.list_question;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.question.Question;

@Entity
public class ListQuestion extends Question{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    @ElementCollection
    private List<String> possibleAnswers;

    @ElementCollection
    private List<String> correctAnswers;

    public ListQuestion(){}

    public ListQuestion(String questionText, List<String> possibleAnswers,List<String> correctAnswer){
        this.questionText = questionText;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswers = correctAnswer;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestionText() {
        return questionText;
    }

    public List<String> getCorrectAnswer() {
        return this.correctAnswers;
    }

    public List<String> getPossibleAnswers() {
        return this.possibleAnswers;
    }

}