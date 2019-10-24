package com.question.list.list_answer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.user.User;

@Entity
public class ListAnswer{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String answerText;

    private boolean correct;

    @OneToOne
    private User user;

    public ListAnswer(){}

    public ListAnswer(String answerText, boolean correct){
        this.answerText = answerText;
        this.correct = correct;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String answerText() {
        return answerText;
    }

    public void answerText(String answerText) {
        this.answerText = answerText;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }


}