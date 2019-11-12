package com.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public Optional<Course> findOne(long id) {
        return courseRepository.findById(id);
    }

    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    public void save(Course course) {
        courseRepository.save(course);
    }

    public void delete(long id) {
        courseRepository.deleteById(id);
    }

    public List<Course> findTeachingCourses(long teacherId){
        return this.courseRepository.findByTeacherId(teacherId);
    }

    public List<Long> findUserCourses(long id){
        return this.courseRepository.findUserCourses(id);
    }

    public double findUserCorrectWrongAnswerRelation(long courseId, long unitId, long userId){
        return ((double) (this.courseRepository.findUserCorrectDefinitionAnswers(courseId, unitId, userId) + this.courseRepository.findUserCorrectListAnswers(courseId, unitId, userId) +
                this.courseRepository.findUserCorrectTestAnswers(courseId, unitId, userId))) / (this.courseRepository.findUserDefinitionAnswers(courseId, unitId, userId) +
                this.courseRepository.findUserListAnswers(userId, unitId, userId) + this.courseRepository.findUserTestAnswers(courseId, unitId, userId));
    }
}
