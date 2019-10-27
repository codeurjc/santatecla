package com.question.list.list_answer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.user.User;

import java.util.ArrayList;
import java.util.List;

@Entity
public class ListAnswer{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private ArrayList<String> answer;

    private boolean correct;

    @OneToOne
    private User user;

    public ListAnswer(){
        this.answer = new ArrayList<>();
    }

    public ListAnswer(ArrayList<String> answer, boolean correct){
        this.answer = answer;
        this.correct = correct;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public ArrayList<String> getAnswer() {
        return answer;
    }

    public void setAnswer(ArrayList<String> answer) {
        this.answer = answer;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

}