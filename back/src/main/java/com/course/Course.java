package com.course;

import com.unit.Unit;
import com.user.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private String description;

    @ManyToMany
    private List<Unit> units;

    @ManyToMany
    private List<User> students;

    @ManyToOne
    private User teacher;

    public Course(){
        this.units = new ArrayList<>();
        this.students = new ArrayList<>();
    }

    public Course(String name, User teacher, String description){
        this.units = new ArrayList<>();
        this.students = new ArrayList<>();
        this.name = name;
        this.teacher = teacher;
        this.description = description;
    }

    public void addUnit(Unit unit){
        this.units.add(unit);
    }

    public void addStudent(User user){
        this.students.add(user);
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Unit> getUnits() {
        return units;
    }

    public List<User> getStudents() {
        return students;
    }

    public User getTeacher() {
        return teacher;
    }

    public String getDescription() {
        return description;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUnits(List<Unit> units) {
        this.units = units;
    }

    public void setStudents(List<User> students) {
        this.students = students;
    }

    public void setTeacher(User teacher) {
        this.teacher = teacher;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
