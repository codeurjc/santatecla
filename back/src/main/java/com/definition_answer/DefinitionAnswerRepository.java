package com.definition_answer;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DefinitionAnswerRepository extends JpaRepository<DefinitionAnswer, Long> {
    
    public List<DefinitionAnswer> findAll();
    
    
}