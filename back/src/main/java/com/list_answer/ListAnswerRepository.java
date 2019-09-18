package com.list_answer;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ListAnswerRepository extends JpaRepository<ListAnswer, Long> {
    
    public List<ListAnswer> findAll();
    
    
}