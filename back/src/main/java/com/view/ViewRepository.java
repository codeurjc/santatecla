package com.view;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ViewRepository extends JpaRepository<View, Long> {
    
    public List<View> findAll();
    
    
}