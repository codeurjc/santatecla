package com.course;

import java.util.List;

public class UserProgressItem {
    private String name;
    private List<Double> points;

    public UserProgressItem(String studentName, List<Double> points){
        this.name = studentName;
        this.points = points;
    }

    public String getName() {
        return name;
    }

    public void setName(String studentName) {
        this.name = studentName;
    }

    public List<Double> getPoints() {
        return points;
    }

    public void setPoints(List<Double> points) {
        this.points = points;
    }
}
