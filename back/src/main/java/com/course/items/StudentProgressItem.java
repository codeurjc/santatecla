package com.course.items;

import com.course.items.ModuleProgress;

import java.util.ArrayList;
import java.util.List;

public class StudentProgressItem {
    private String studentName;
    private List<Double> modulesGrade;
    private double totalAverage;

    public StudentProgressItem(String studentName){
        this.studentName = studentName;
        this.modulesGrade = new ArrayList<>();
    }

    public void addModuleGrade(Double m){
        this.modulesGrade.add(m);
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public List<Double> getModulesGrade() {
        return modulesGrade;
    }

    public void setModulesGrade(List<Double> modules) {
        this.modulesGrade = modules;
    }

    public double getTotalAverage() {
        return totalAverage;
    }

    public void setTotalAverage(double totalAverage) {
        this.totalAverage = totalAverage;
    }
}
