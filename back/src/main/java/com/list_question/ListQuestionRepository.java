package com.list_question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ListQuestionRepository extends JpaRepository<ListQuestion, Long> {
    
    public List<ListQuestion> findAll();
    
    
}