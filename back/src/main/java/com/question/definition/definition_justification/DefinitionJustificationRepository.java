package com.question.definition.definition_justification;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DefinitionJustificationRepository extends JpaRepository<DefinitionJustification, Long> {
    
    public List<DefinitionJustification> findAll();
    
    
}