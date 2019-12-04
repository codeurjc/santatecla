package com.question;

import com.itinerary.module.Module;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    protected String subtype;
    protected String questionText;

    protected int totalAnswers;
    protected int totalCorrectAnswers;
    protected int totalWrongAnswers;

    @ManyToMany
    protected List<Module> modules;

    public Question() {
        this.subtype = this.getClass().getSimpleName();
        this.totalAnswers = 0;
        this.totalCorrectAnswers = 0;
        this.totalWrongAnswers = 0;
        this.modules = new ArrayList<>();
    }

    public Question(String questionText) {
        this();
        this.questionText = questionText;
        this.modules = new ArrayList<>();
    }

    /**
     * Getters and Setters
     */

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestionText() {
        return questionText;
    }

    public String getSubtype() {
        return subtype;
    }

    public int getTotalAnswers() {
        return totalAnswers;
    }

    public int getTotalCorrectAnswers() {
        return totalCorrectAnswers;
    }

    public int getTotalWrongAnswers() {
        return totalWrongAnswers;
    }

    public List<Module> getModules() {
        return modules;
    }

    public void addModule(Module module){
        this.modules.add(module);
    }

    public void setSubtype(String subtype) {
        this.subtype = subtype;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public void setTotalAnswers(int totalAnswers) {
        this.totalAnswers = totalAnswers;
    }

    public void setTotalCorrectAnswers(int totalCorrectAnswers) {
        this.totalCorrectAnswers = totalCorrectAnswers;
    }

    public void setTotalWrongAnswers(int totalWrongAnswers) {
        this.totalWrongAnswers = totalWrongAnswers;
    }

    public void setModules(List<Module> modules) {
        this.modules = modules;
    }
}