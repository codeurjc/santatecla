package com.unit;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UnitRepository extends JpaRepository<Unit, Long> {

    public List<Unit> findByNameContaining(String name);
    
    public List<Unit> findAll();
    
    @Query(value = "select unit.id, unit.name from unit left join unit_relations on unit.id = unit_relations.unit_id left join relation on unit_relations.relations_id = relation.id where related_to_id = ?1", nativeQuery = true)
    public Unit getParent(Long id);

    @Query(value = "select COUNT( DISTINCT list_question.id) from unit_list_questions join list_question on unit_list_questions.list_questions_id = list_question.id " +
            "join question_list_answers on list_question.id = question_list_answers.list_question_id join list_answer on question_list_answers.list_answers_id = list_answer.id" +
            " join user on list_answer.user_id = user.id where unit_list_questions.unit_id = ?1 and user.id = ?2 and list_answer.unit_id = ?1", nativeQuery = true)
    Integer findUserListAnswerDistinctCount(Long unitId, Long userId);

    @Query(value = "select COUNT( DISTINCT definition_question.id) from unit_definition_questions join definition_question on unit_definition_questions.definition_questions_id = definition_question.id " +
            "join question_definition_answers on definition_question.id = question_definition_answers.definition_question_id join definition_answer on question_definition_answers.definition_answers_id = definition_answer.id" +
            " join user on definition_answer.user_id = user.id where unit_definition_questions.unit_id = ?1 and user.id = ?2 and definition_answer.unit_id = ?1", nativeQuery = true)
    Integer findUserDefinitionAnswerDistinctCount(Long unitId, Long userId);

    @Query(value = "select COUNT( DISTINCT test_question.id) from unit_test_questions join test_question on unit_test_questions.test_questions_id = test_question.id " +
            "join question_test_answers on test_question.id = question_test_answers.test_question_id join test_answer on question_test_answers.test_answers_id = test_answer.id" +
            " join user on test_answer.user_id = user.id where unit_test_questions.unit_id = ?1 and user.id = ?2 and test_answer.unit_id = ?1", nativeQuery = true)
    Integer findUserTestAnswerDistinctCount(Long unitId, Long userId);
    
}