package com.course.items;

public class ProgressInfo {
    private String name;
    private Double realization;
    private Double grade;

    public ProgressInfo(String name){
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getRealization() {
        return realization;
    }

    public void setRealization(Double realization) {
        this.realization = realization;
    }

    public Double getGrade() {
        return grade;
    }

    public void setGrade(Double grade) {
        if(Double.isNaN(grade)){
            this.grade = 0.0;
        }
        else {
            this.grade = grade;
        }
    }
}
