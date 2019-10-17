package com.question.definition.definition_answer;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.question.definition.definition_justification.DefinitionJustification;
import com.user.User;

@Entity
public class DefinitionAnswer{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String answerText;

    private boolean correct;

    @OneToMany(cascade = CascadeType.ALL)
    private List<DefinitionJustification> justifications;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;

    public DefinitionAnswer(){
        this.justifications = new ArrayList<>();
    }

    public DefinitionAnswer(String answerText, boolean correct){
        this.answerText = answerText;
        this.correct = correct;
        this.justifications = new ArrayList<>();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAnswerText() {
        return answerText;
    }

    public boolean isCorrect() {
        return correct;
    }

    public List<DefinitionJustification> getJustifications() {
        return justifications;
    }

    public void addJustification(DefinitionJustification justification) {
        this.justifications.add(justification);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    
    
}