package com.course;

import com.GeneralRestController;
import com.unit.Unit;
import com.user.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/course")
public class CourseRestController extends GeneralRestController {

    @GetMapping(value="/")
    public ResponseEntity<List<Course>> getCourses(){
        return new ResponseEntity<>(this.courseService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/user/{id}")
    public ResponseEntity<List<Course>> getUserCourses(@PathVariable long id){
        List<Course> courses = new ArrayList<>();
        for(Long courseId : this.courseService.findUserCourses(id)){
            Optional<Course> optional = this.courseService.findOne(courseId);
            if(optional.isPresent()) {
                courses.add(optional.get());
            }
        }
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }

    @GetMapping(value="/teacher/{id}")
    public ResponseEntity<List<Course>> getTeacherCourses(@PathVariable long id){
        return new ResponseEntity<>(this.courseService.findTeachingCourses(id), HttpStatus.OK);
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<Course> getCourse(@PathVariable long id){
        Optional<Course> optional = this.courseService.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<>(optional.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value="/{courseId}/user/{userId}/best")
    public ResponseEntity<Unit> getBestUnit(@PathVariable long courseId, @PathVariable long userId){
        Optional<Course> optional = this.courseService.findOne(courseId);
        double aux = 0;
        Unit best = new Unit();
        if(optional.isPresent()){
            for(Unit u : optional.get().getUnits()){
                if(this.courseService.findUserCorrectWrongAnswerRelation(courseId, u.getId(), userId) > aux){
                    aux = this.courseService.findUserCorrectWrongAnswerRelation(courseId, u.getId(), userId);
                    best = u;
                }
            }
            return new ResponseEntity<>(best, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value="/{courseId}/user/{userId}/worst")
    public ResponseEntity<Unit> getWorstUnit(@PathVariable long courseId, @PathVariable long userId){
        Optional<Course> optional = this.courseService.findOne(courseId);
        double aux = 1;
        Unit worst = new Unit();
        if(optional.isPresent()){
            for(Unit u : optional.get().getUnits()){
                if(this.courseService.findUserCorrectWrongAnswerRelation(courseId, u.getId(), userId) < aux){
                    aux = this.courseService.findUserCorrectWrongAnswerRelation(courseId, u.getId(), userId);
                    worst = u;
                }
            }
            return new ResponseEntity<>(worst, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value="/{courseId}/user/best")
    public ResponseEntity<User> getBestStudent(@PathVariable long courseId){
        Optional<Course> optional = this.courseService.findOne(courseId);
        double aux = 0;
        User best = new User();
        double sumUnitPoints = 0;
        if(optional.isPresent()){
            for(User user : optional.get().getStudents()) {
                System.out.println(user.getName());
                for (Unit unit : optional.get().getUnits()) {
                    sumUnitPoints += this.courseService.findUserCorrectWrongAnswerRelation(courseId, unit.getId(), user.getId());
                }
                if(sumUnitPoints > aux){
                    aux = sumUnitPoints;
                    best = user;
                }
                sumUnitPoints = 0;
            }
            return new ResponseEntity<>(best, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value="/{courseId}/user/worst")
    public ResponseEntity<User> getWorstStudent(@PathVariable long courseId){
        Optional<Course> optional = this.courseService.findOne(courseId);
        double aux = Double.MAX_VALUE;
        User worst = new User();
        double sumUnitPoints = 0;
        if(optional.isPresent()){
            for(User user : optional.get().getStudents()) {
                System.out.println(user.getName());
                for (Unit unit : optional.get().getUnits()) {
                    sumUnitPoints += this.courseService.findUserCorrectWrongAnswerRelation(courseId, unit.getId(), user.getId());
                }
                if(sumUnitPoints < aux){
                    aux = sumUnitPoints;
                    worst = user;
                }
                sumUnitPoints = 0;
            }
            return new ResponseEntity<>(worst, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value="/{courseId}/class/points")
    public ResponseEntity<List<UserProgressItem>> getStudentProgress(@PathVariable long courseId){
        Optional<Course> optional = this.courseService.findOne(courseId);
        ArrayList<Double> points;
        ArrayList<UserProgressItem> result = new ArrayList<>();
        if(optional.isPresent()){
            for (User user : optional.get().getStudents()){
                points = new ArrayList<>();
                for(Unit unit : optional.get().getUnits()){
                    points.add(this.courseService.findUserCorrectWrongAnswerRelation(courseId,unit.getId(), user.getId())*10);
                }
                UserProgressItem item = new UserProgressItem(user.getName(), points);
                result.add(item);
            }
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value="/{courseId}/units/points")
    public ResponseEntity<List<UserProgressItem>> getUnitProgress(@PathVariable long courseId){
        Optional<Course> optional = this.courseService.findOne(courseId);
        ArrayList<Double> points;
        int correctAnswers;
        int wrongAnswers;
        ArrayList<UserProgressItem> result = new ArrayList<>();
        if(optional.isPresent()){
            for (Unit unit : optional.get().getUnits()){
                points = new ArrayList<>();
                correctAnswers = this.courseService.findUnitCorrectAnswers(courseId, unit.getId());
                points.add((double)correctAnswers);
                wrongAnswers = this.courseService.findUnitWrongAnswers(courseId, unit.getId());
                points.add((double)wrongAnswers);
                if(wrongAnswers > 0.75*(correctAnswers+wrongAnswers)){
                    points.add(1.0);
                }
                else {
                    points.add(0.0);
                }
                UserProgressItem item = new UserProgressItem(unit.getName(), points);
                result.add(item);
            }
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
