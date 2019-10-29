package com.question.test.test_question;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TestQuestionRepository extends JpaRepository<TestQuestion, Long> {

    List<TestQuestion> findAll();

    @Query(value = "select test_answer.id, test_answer.answer_text, test_answer.correct, test_answer.user_id from test_question join test_question_answers on test_question.id = test_question_answers.test_question_id join test_answer on test_question_answers.answers_id = test_answer.id join user on test_answer.user_id = user.id where test_question.id = ?2 and user.id = ?1", nativeQuery = true)
    public List<Object> findUserAnswers(long userId, long questionId);
}