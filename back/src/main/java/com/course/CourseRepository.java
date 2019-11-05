package com.course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    public List<Course> findAll();

    @Query(value = "SELECT course.id FROM course JOIN course_students ON course.id = course_students.course_id JOIN user ON course_students.students_id = user.id WHERE user.id = ?1", nativeQuery = true)
    public List<Long> findUserCourses(long userId);
}
