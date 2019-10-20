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

    private int correctAnswersCount;
    private int wrongAnswers;

    public ListQuestion(){
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
    }

    public ListQuestion(String questionText, List<String> possibleAnswers, List<String> correctAnswer){
        this.subtype = this.getClass().getSimpleName();
        this.correctAnswersCount = 0;
        this.wrongAnswers = 0;
        this.questionText = questionText;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswers = correctAnswer;
    }

    public void update(ListQuestion q) {
        if(q.getQuestionText() != null){
            this.questionText = q.getQuestionText();
        }
        if(!q.getCorrectAnswers().equals(this.correctAnswers)) {
            this.correctAnswers = q.getCorrectAnswers();
        }
        if(!q.getPossibleAnswers().equals(this.possibleAnswers)) {
            this.possibleAnswers = q.getPossibleAnswers();
        }
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

    public List<String> getCorrectAnswers() {
        return this.correctAnswers;
    }

    public List<String> getPossibleAnswers() {
        return this.possibleAnswers;
    }

    public void setPossibleAnswers(List<String> possibleAnswers) {
        this.possibleAnswers = possibleAnswers;
    }
    
    public int getCorrectAnswersCount(){
        return this.correctAnswersCount;
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