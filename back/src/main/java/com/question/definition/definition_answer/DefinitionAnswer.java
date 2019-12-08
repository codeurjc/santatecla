package com.question.definition.definition_answer;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.user.User;

@Entity
public class DefinitionAnswer{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;

    private String answerText;

    private boolean correct;

    private String justification;

    private long unitId;
    private long moduleId;
    private long courseId;

    @OneToOne
    private User user;

    public DefinitionAnswer(){}

    public DefinitionAnswer(String answerText, boolean correct){
        this.answerText = answerText;
        this.correct = correct;
    }

    public void update(DefinitionAnswer a) {
        if (getAnswerText() != null) {
            this.answerText = a.getAnswerText();
        }
        if (a.getJustification() != null) {
            this.justification = a.getJustification();
        }

        this.correct = a.isCorrect();
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

    public String getJustification() {
        return justification;
    }

    public void setJustification(String justification) {
        this.justification = justification;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public long getUnitId() {
        return unitId;
    }

    public void setUnitId(long unitId) {
        this.unitId = unitId;
    }

    public long getModuleId() {
        return moduleId;
    }

    public void setModuleId(long moduleId) {
        this.moduleId = moduleId;
    }
}