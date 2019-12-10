package com.course;

import com.GeneralRestController;
import com.course.items.ProgressItem;
import com.course.items.ModuleFormat;
import com.course.items.StudentProgressItem;
import com.itinerary.block.Block;
import com.itinerary.lesson.Lesson;
import com.itinerary.module.Module;
import com.question.Question;
import com.user.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(value="/")
    public ResponseEntity<Course> createCourse(@RequestBody Course course){
        this.courseService.save(course);
        return new ResponseEntity<>(course, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Course> editCourse(@PathVariable long id, @RequestBody Course course){
        Optional<Course> optional = this.courseService.findOne(id);

        if(optional.isPresent()){
            optional.get().update(course);
            this.courseService.save(optional.get());
            return new ResponseEntity<>(optional.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Course> deleteCourse(@PathVariable long id){
        Optional<Course> optional = this.courseService.findOne(id);

        if (optional.isPresent()){
            this.courseService.delete(id);
            return new ResponseEntity<>(optional.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
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

    @GetMapping(value="/{courseId}/module/progress")
    public ResponseEntity<List<ProgressItem>> getModuleProgress(@PathVariable long courseId){
        Optional<Course> optional = this.courseService.findOne(courseId);
        ArrayList<Module> questionModules = new ArrayList<>();
        ArrayList<ProgressItem> result = new ArrayList<>();
        ArrayList<Double> values;

        if(optional.isPresent()){
            findModulesWithQuestionRecursive(optional.get().getModule(), questionModules);

            for (Module m : questionModules){
                values = new ArrayList<>();

                int questionCount = this.questionService.findModuleQuestionCount(m.getId());
                double moduleRealization = this.courseService.findModuleRealization(optional.get().getStudents(), questionCount, m.getId(), courseId);
                double moduleGrade = this.courseService.findModuleGrade(optional.get().getStudents(), m.getId(), courseId);
                values.add(moduleRealization);
                values.add(moduleGrade);


                result.add(new ProgressItem(m.getName(), values));
            }
            return new ResponseEntity<>(result, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    private void findModulesWithQuestionRecursive(Block block, List<Module> result){
        if (!(block instanceof Lesson)){
            Module module = (Module)block;

            if(this.questionService.findQuestionsByModuleId(module.getId()).size() > 0){
                result.add(module);
            }

            for (Block b : module.getBlocks()){
                findModulesWithQuestionRecursive(b, result);
            }
        }
    }

    @GetMapping(value = "/{courseId}/students/progress")
    public ResponseEntity<List<StudentProgressItem>> getStudentsProgress(@PathVariable long courseId){
        Optional<Course> optional = this.courseService.findOne(courseId);
        ArrayList<Module> questionModules = new ArrayList<>();
        double sumQuestionAux;
        double sumModuleAux;
        double average;
        List<Question> questions;
        StudentProgressItem item;
        ArrayList<StudentProgressItem> result = new ArrayList<>();

        if(optional.isPresent()){
            findModulesWithQuestionRecursive(optional.get().getModule(), questionModules);

            for (User u : optional.get().getStudents()){
                item = new StudentProgressItem(u.getName());
                sumModuleAux = 0;
                for (Module m : questionModules){
                    questions = this.questionService.findQuestionsByModuleId(m.getId());
                    sumQuestionAux = 0;
                    for (Question q: questions){
                        sumQuestionAux += this.courseService.findUserQuestionGrade(u.getId(), m.getId(), courseId, q);
                    }
                    sumModuleAux += sumQuestionAux / questions.size();
                    item.addGrade(sumQuestionAux / questions.size());
                }
                average = sumModuleAux / questionModules.size();

                if (Double.isNaN(average)){
                    average = 0;
                }

                item.setAverage(average);
                result.add(item);
            }
            return new ResponseEntity<>(result, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{courseId}/module/{moduleId}/extended")
    public ResponseEntity<List<StudentProgressItem>> getExtendedStudentsProgress(@PathVariable long courseId, @PathVariable long moduleId){
        Optional<Course> course = this.courseService.findOne(courseId);
        Optional<Module> module = this.moduleService.findOne(moduleId);
        double grade;
        double sumModuleAux;
        List<Question> questions;
        StudentProgressItem item;
        ArrayList<StudentProgressItem> result = new ArrayList<>();

        if(course.isPresent() && module.isPresent()){
            for (User u : course.get().getStudents()){
                item = new StudentProgressItem(u.getName());
                sumModuleAux = 0;
                questions = this.questionService.findQuestionsByModuleId(moduleId);
                for (Question q: questions){
                    grade = this.courseService.findUserQuestionGrade(u.getId(), moduleId, courseId, q);
                    item.addGrade(grade);
                    sumModuleAux += grade;
                }
                item.setAverage(sumModuleAux / questions.size());
                result.add(item);
            }
            return new ResponseEntity<>(result, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{courseId}/module/format")
    public ResponseEntity<List<ModuleFormat>> getModuleQuestions(@PathVariable long courseId){
        Optional<Course> optional = this.courseService.findOne(courseId);
        ArrayList<Module> questionModules = new ArrayList<>();
        List<Question> questions;
        ArrayList<ModuleFormat> result = new ArrayList<>();
        ModuleFormat item;

        if(optional.isPresent()){
            findModulesWithQuestionRecursive(optional.get().getModule(), questionModules);

            for (Module m : questionModules){
                item = new ModuleFormat(m.getName());
                item.setId(m.getId());
                questions = this.questionService.findQuestionsByModuleId(m.getId());

                for (Question q: questions){
                    item.addQuestion(q.getQuestionText());
                }
                result.add(item);
            }

            return new ResponseEntity<>(result, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    /*@GetMapping(value="/{courseId}/user/{userId}/worst")
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
    }*/

}
