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

    @ManyToMany
    private List<Unit> units;

    @ManyToMany
    private List<User> students;

    public Course(){
        this.units = new ArrayList<>();
        this.students = new ArrayList<>();
    }

    public Course(String name){
        this.units = new ArrayList<>();
        this.students = new ArrayList<>();
        this.name = name;
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
}
