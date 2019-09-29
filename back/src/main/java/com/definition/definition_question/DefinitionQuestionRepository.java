package com.definition.definition_question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DefinitionQuestionRepository extends JpaRepository<DefinitionQuestion, Long> {
    
    public List<DefinitionQuestion> findAll();
    public List<DefinitionQuestion> findByType(int type);
    
}