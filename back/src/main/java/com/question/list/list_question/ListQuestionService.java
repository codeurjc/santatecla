package com.question.list.list_question;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListQuestionService{
    @Autowired
    private ListQuestionRepository repository;

    public List<ListQuestion> findAll() {
		  return this.repository.findAll();
    }
    
    public Optional<ListQuestion> findOne(long id){
      return this.repository.findById(id);
    }
}