package com.unit;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UnitRepository extends JpaRepository<Unit, Long> {

    public List<Unit> findByNameContaining(String name);
    
    public List<Unit> findAll();

}