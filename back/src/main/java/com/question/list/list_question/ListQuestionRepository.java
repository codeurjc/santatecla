package com.question.list.list_question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ListQuestionRepository extends JpaRepository<ListQuestion, Long> {
    
    List<ListQuestion> findAll();

    @Query(value = "select list_answer.id, list_answer.correct, list_answer.user_id from question join question_list_answers on question.id = question_list_answers.list_question_id join list_answer on question_list_answers.list_answers_id = list_answer.id join user on list_answer.user_id = user.id where question.id = ?2 and user.id = ?1", nativeQuery = true)
    List<Object> findUserAnswers(long userId, long questionId);

    @Query(value = "select question.question_text, count (question.id) from question join question_list_answers on question.id = question_list_answers.list_question_id join list_answer on question_list_answers.list_answers_id = list_answer.id where question.id = ?1 group by list_answer.answer", nativeQuery = true)
    List<Object> findChosenAnswers(long questionId);
}