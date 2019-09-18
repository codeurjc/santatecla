package com.definition_question;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.definition_answer.DefinitionAnswer;

@Entity
public class DefinitionQuestion{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String questionText;

    private int type;

    @OneToMany
    private List<DefinitionAnswer> answers;

    public DefinitionQuestion(){}

    public DefinitionQuestion(String questionText, int type){
        this.questionText = questionText;
        this.type = type;
        this.answers = new ArrayList<>();
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

    public List<DefinitionAnswer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<DefinitionAnswer> answers) {
        this.answers = answers;
    }
    
    
}