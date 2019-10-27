package com.question.list.list_question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListQuestionRepository extends JpaRepository<ListQuestion, Long> {
    
    List<ListQuestion> findAll();

}