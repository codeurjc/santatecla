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

    private String questionText;

    @ElementCollection
    private List<String> possibleAnswers;

    @ElementCollection
    private List<String> correctAnswer;

    private int correctAnswers;
    private int wrongAnswers;

    public ListQuestion(){
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
    }

    public ListQuestion(String questionText, List<String> possibleAnswers,List<String> correctAnswer){
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.questionText = questionText;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswer = correctAnswer;
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

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }


    public List<String> getCorrectAnswer() {
        return this.correctAnswer;
    }

    public void setCorectAnswers(List<String> answers) {
        this.correctAnswer = answers;
    }

    public List<String> getPossibleAnswers() {
        return this.possibleAnswers;
    }

    public void setPossibleAnswers(List<String> possibleAnswers) {
        this.possibleAnswers = possibleAnswers;
    }
    
    public int getCorrectAnswers(){
        return this.correctAnswers;
    }
    
    public void setCorrectAnswers(int a){
        this.correctAnswers = a;
    }

    public int getWrongAnswers(){
        return this.wrongAnswers;
    }

    public void setWrongAnswers(int a){
        this.wrongAnswers = a;
    }
    
}