package com.list_question;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.item.Item;
import com.list_answer.ListAnswer;

@Entity
public class ListQuestion{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String questionText;

    private int type;

    @OneToMany
    private List<ListAnswer> answers;

    @OneToMany
    private List<Item> items;

    public ListQuestion(){}

    public ListQuestion(String questionText, int type){
        this.questionText = questionText;
        this.type = type;
        this.answers = new ArrayList<>();
        this.items = new ArrayList<>();
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

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public List<ListAnswer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<ListAnswer> answers) {
        this.answers = answers;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
    
    
}