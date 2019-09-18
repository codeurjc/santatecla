package com.definition_question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DefinitionQuestionRepository extends JpaRepository<DefinitionQuestion, Long> {
    
    public List<DefinitionQuestion> findAll();
    
    
}