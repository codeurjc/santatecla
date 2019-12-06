package com.course.items;

import java.util.ArrayList;
import java.util.List;

public class ModuleProgress {
    private String name;
    private List<ModuleFormat> questions;
    private double moduleAverage;

    public ModuleProgress(String name){
        this.name = name;
        this.questions = new ArrayList<>();
    }

    public void addQuestion(ModuleFormat question){
        this.questions.add(question);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<ModuleFormat> getQuestions() {
        return questions;
    }

    public void setQuestions(List<ModuleFormat> questions) {
        this.questions = questions;
    }

    public double getModuleAverage() {
        return moduleAverage;
    }

    public void setModuleAverage(double moduleAverage) {
        this.moduleAverage = moduleAverage;
    }
}
