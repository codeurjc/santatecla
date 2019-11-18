package com.course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    public List<Course> findAll();
    public List<Course> findByTeacherId(long id);

    @Query(value = "SELECT course.id FROM course JOIN course_students ON course.id = course_students.course_id JOIN user ON course_students.students_id = user.id WHERE user.id = ?1", nativeQuery = true)
    public List<Long> findUserCourses(long userId);

    @Query(value = "select COUNT(course.id) from course join course_units on course.id = course_units.course_id join unit on course_units.units_id = unit.id join unit_test_questions" +
            " on unit.id = unit_test_questions.unit_id join test_question on unit_test_questions.test_questions_id = test_question.id " +
            "join question_test_answers on test_question.id = question_test_answers.test_question_id join test_answer on question_test_answers.test_answers_id = test_answer.id" +
            " join user on test_answer.user_id = user.id where course.id = ?1 and unit_test_questions.unit_id = ?2 and user.id = ?3 and test_answer.unit_id = ?2 and test_answer.correct=true ", nativeQuery = true)
    Integer findUserCorrectTestAnswers(Long courseId, Long unitId, Long userId);

    @Query(value = "select COUNT(course.id) from course join course_units on course.id = course_units.course_id join unit on course_units.units_id = unit.id join unit_list_questions" +
            " on unit.id = unit_list_questions.unit_id join list_question on unit_list_questions.list_questions_id = list_question.id " +
            "join question_list_answers on list_question.id = question_list_answers.list_question_id join list_answer on question_list_answers.list_answers_id = list_answer.id" +
            " join user on list_answer.user_id = user.id where course.id = ?1 and unit_list_questions.unit_id = ?2 and user.id = ?3 and list_answer.unit_id = ?2 and list_answer.correct=true ", nativeQuery = true)
    Integer findUserCorrectListAnswers(Long courseId, Long unitId, Long userId);

    @Query(value = "select COUNT(course.id) from course join course_units on course.id = course_units.course_id join unit on course_units.units_id = unit.id join unit_definition_questions" +
            " on unit.id = unit_definition_questions.unit_id join definition_question on unit_definition_questions.definition_questions_id = definition_question.id " +
            "join question_definition_answers on definition_question.id = question_definition_answers.definition_question_id join definition_answer on question_definition_answers.definition_answers_id = definition_answer.id" +
            " join user on definition_answer.user_id = user.id where course.id = ?1 and unit_definition_questions.unit_id = ?2 and user.id = ?3 and definition_answer.unit_id = ?2 and definition_answer.correct=true ", nativeQuery = true)
    Integer findUserCorrectDefinitionAnswers(Long courseId, Long unitId, Long userId);

    @Query(value = "select COUNT(course.id) from course join course_units on course.id = course_units.course_id join unit on course_units.units_id = unit.id join unit_test_questions" +
            " on unit.id = unit_test_questions.unit_id join test_question on unit_test_questions.test_questions_id = test_question.id " +
            "join question_test_answers on test_question.id = question_test_answers.test_question_id join test_answer on question_test_answers.test_answers_id = test_answer.id" +
            " join user on test_answer.user_id = user.id where course.id = ?1 and unit_test_questions.unit_id = ?2 and user.id = ?3 and test_answer.unit_id = ?2", nativeQuery = true)
    Integer findUserTestAnswers(Long courseId, Long unitId, Long userId);

    @Query(value = "select COUNT(course.id) from course join course_units on course.id = course_units.course_id join unit on course_units.units_id = unit.id join unit_list_questions" +
            " on unit.id = unit_list_questions.unit_id join list_question on unit_list_questions.list_questions_id = list_question.id " +
            "join question_list_answers on list_question.id = question_list_answers.list_question_id join list_answer on question_list_answers.list_answers_id = list_answer.id" +
            " join user on list_answer.user_id = user.id where course.id = ?1 and unit_list_questions.unit_id = ?2 and user.id = ?3 and list_answer.unit_id = ?2", nativeQuery = true)
    Integer findUserListAnswers(Long courseId, Long unitId, Long userId);

    @Query(value = "select COUNT(course.id) from course join course_units on course.id = course_units.course_id join unit on course_units.units_id = unit.id join unit_definition_questions" +
            " on unit.id = unit_definition_questions.unit_id join definition_question on unit_definition_questions.definition_questions_id = definition_question.id " +
            "join question_definition_answers on definition_question.id = question_definition_answers.definition_question_id join definition_answer on question_definition_answers.definition_answers_id = definition_answer.id" +
            " join user on definition_answer.user_id = user.id where course.id = ?1 and unit_definition_questions.unit_id = ?2 and user.id = ?3 and definition_answer.unit_id = ?2", nativeQuery = true)
    Integer findUserDefinitionAnswers(Long courseId, Long unitId, Long userId);
}
