package com.question.definition.definition_question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DefinitionQuestionRepository extends JpaRepository<DefinitionQuestion, Long> {
    
}