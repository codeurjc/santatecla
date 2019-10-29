package com.question.definition.definition_question;

import java.util.List;

import com.question.definition.definition_answer.DefinitionAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DefinitionQuestionRepository extends JpaRepository<DefinitionQuestion, Long> {

    @Query(value = "select definition_answer.id, definition_answer.answer_text, definition_answer.correct, definition_answer.justification, definition_answer.user_id from definition_question join definition_question_answers on definition_question.id = definition_question_answers.definition_question_id join definition_answer on definition_question_answers.answers_id = definition_answer.id join user on definition_answer.user_id = user.id where definition_question.id = ?2 and user.id = ?1", nativeQuery = true)
    public List<Object> findUserAnswers(long userId, long questionId);
}