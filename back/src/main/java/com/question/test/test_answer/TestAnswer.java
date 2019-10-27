package com.question.test;

import com.user.User;

import javax.persistence.*;

@Entity
public class TestAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String answerText;

    private boolean correct;

    @OneToOne
    private User user;

    public TestAnswer() {
    }

    public TestAnswer(String answerText, boolean correct) {
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

