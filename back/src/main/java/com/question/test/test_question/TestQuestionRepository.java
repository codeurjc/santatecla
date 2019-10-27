package com.question.test.test_question;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface TestQuestionRepository extends JpaRepository<TestQuestion, Long> {

    List<TestQuestion> findAll();
}
