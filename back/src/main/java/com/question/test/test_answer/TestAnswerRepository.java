package com.question.test.test_answer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestAnswerRepository extends JpaRepository<TestAnswer, Long> {
}
