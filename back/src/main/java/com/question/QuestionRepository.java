package com.question;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    List<Question> findAll();

    @Query(value = "SELECT * from question join question_modules on question.id = question_modules.question_id where question_modules.modules_id = ?1", nativeQuery = true)
    List<Question> findByModuleId(long id);

    @Query(value = "SELECT COUNT(question.id) from question join question_modules on question.id = question_modules.question_id where question_modules.modules_id = ?1", nativeQuery = true)
    Integer findModuleQuestionCount(long id);

}