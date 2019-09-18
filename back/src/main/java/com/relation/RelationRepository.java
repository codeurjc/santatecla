package com.relation;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RelationRepository extends JpaRepository<Relation, Long> {
    
    public List<Relation> findAll();
    
}