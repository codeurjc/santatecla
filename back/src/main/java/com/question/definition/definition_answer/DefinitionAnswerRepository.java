package com.question.definition.definition_answer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DefinitionAnswerRepository extends JpaRepository<DefinitionAnswer, Long> {

    String findUserAnswersQuery =
            "SELECT definitionAnswer FROM DefinitionAnswer definitionAnswer, DefinitionQuestion definitionQuuestion " +
                    "WHERE definitionAnswer MEMBER OF definitionQuuestion.definitionAnswers" +
                    "AND definitionQuestion.id = ?1 AND definitionAnswer.user.id = ?2";

    @Query(value = findUserAnswersQuery, nativeQuery = true)
    List<Object> findUserAnswers(long QuestionId, long userId);

}
