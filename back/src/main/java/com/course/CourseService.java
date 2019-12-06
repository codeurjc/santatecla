package com.course;

import com.itinerary.module.Module;
import com.question.Question;
import com.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    private int findUserRealization(Long moduleId, Long userId, Long courseId){
        return this.courseRepository.findUserListAnswerDistinctCount(moduleId, userId, courseId) + this.courseRepository.findUserTestAnswerDistinctCount(moduleId, userId, courseId) +
                this.courseRepository.findUserDefinitionAnswerDistinctCount(moduleId, userId, courseId);
    }

    public Double findModuleRealization(List<User> students, int questionCount, long moduleId, long courseId){
        double sumRealization = 0;
        for (User u : students){
            sumRealization += (double)findUserRealization(moduleId, u.getId(), courseId) / questionCount;
        }
        return (sumRealization/students.size()) * 100;
    }

    private double findUserGrade(Long moduleId, Long userId, Long courseId){
        double result = ((double) (this.courseRepository.findUserCorrectDefinitionAnswers(moduleId, userId, courseId) + this.courseRepository.findUserCorrectListAnswers(moduleId, userId, courseId) +
                this.courseRepository.findUserCorrectTestAnswers(moduleId, userId, courseId))) / (this.courseRepository.findUserDefinitionAnswers(moduleId, userId, courseId) +
                this.courseRepository.findUserListAnswers(moduleId, userId, courseId) + this.courseRepository.findUserTestAnswers(moduleId, userId, courseId));

        if(Double.isNaN(result)){
            return 0;
        }

        return result*10;
    }

    public Double findModuleGrade(List<User> students, long moduleId, long courseId){
        double sumGrade = 0;
        for (User u : students){
            sumGrade += findUserGrade(moduleId, u.getId(), courseId);
        }
        return (sumGrade/students.size());
    }

    public double findUserQuestionGrade(Long userId, long moduleId, long courseId, Question question){
        double result;
        if (question.getSubtype().equals("ListQuestion")){
            result = (double)this.courseRepository.findUserListQuestionCorrectAnswers(moduleId, userId, courseId, question.getId()) /
                    this.courseRepository.findUserListQuestionAnswers(moduleId, userId, courseId, question.getId());
        }
        else if(question.getSubtype().equals("TestQuestion")){
            result = (double)this.courseRepository.findUserTestQuestionCorrectAnswers(moduleId, userId, courseId, question.getId()) /
                    this.courseRepository.findUserTestQuestionAnswers(moduleId, userId, courseId, question.getId());
        }
        else {
            result = (double)this.courseRepository.findUserDefinitionQuestionCorrectAnswers(moduleId, userId, courseId, question.getId()) /
                    this.courseRepository.findUserDefinitionQuestionAnswers(moduleId, userId, courseId, question.getId());
        }

        if (Double.isNaN(result)){
            return 0;
        }

        return result*10;
    }

    public double userAverage(List<Double> values){
        double sum = 0;
        for (double d: values){
            sum += d;
        }
        return sum/values.size();
    }
}
