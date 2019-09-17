package com.unit;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UnitRepository extends JpaRepository<Unit, Long> {
    
    public List<Unit> findAll();
    
    
}