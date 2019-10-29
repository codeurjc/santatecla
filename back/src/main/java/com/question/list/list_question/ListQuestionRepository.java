package com.question.list.list_question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ListQuestionRepository extends JpaRepository<ListQuestion, Long> {
    
    List<ListQuestion> findAll();

    @Query(value = "select list_answer.id, list_answer.answer_text, list_answer.correct, list_answer.user_id from list_question join list_question_answers on list_question.id = list_question_answers.list_question_id join list_answer on list_question_answers.answers_id = list_answer.id join user on list_answer.user_id = user.id where list_question.id = ?2 and user.id = ?1", nativeQuery = true)
    public List<Object> findUserAnswers(long userId, long questionId);

}