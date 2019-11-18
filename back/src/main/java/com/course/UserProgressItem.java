package com.course;

import java.util.List;

public class UserProgressItem {
    private String studentName;
    private List<Double> points;

    public UserProgressItem(String studentName, List<Double> points){
        this.studentName = studentName;
        this.points = points;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public List<Double> getPoints() {
        return points;
    }

    public void setPoints(List<Double> points) {
        this.points = points;
    }
}
