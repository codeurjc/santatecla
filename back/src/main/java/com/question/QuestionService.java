package com.question;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> findAll() {
        return this.questionRepository.findAll();
    }

    public Optional<Question> findOne(long id){ return this.questionRepository.findById(id);}

    public void delete(long id) {
        this.questionRepository.deleteById(id);
    }

    public List<Question> findQuestionsByModuleId(long id){
        return this.questionRepository.findByModuleId(id);
    }

    public Integer findModuleQuestionCount(long id){
        return this.questionRepository.findModuleQuestionCount(id);
    }

}
