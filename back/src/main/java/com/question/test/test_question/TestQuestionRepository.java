package com.question.test.test_question;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestQuestionRepository extends JpaRepository<TestQuestion, Long> {

    List<TestQuestion> findAll();
}
