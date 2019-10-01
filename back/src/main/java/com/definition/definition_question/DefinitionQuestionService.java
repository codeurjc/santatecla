package com.definition.definition_question;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DefinitionQuestionService {

    @Autowired
    private DefinitionQuestionRepository questionRepository;

    public DefinitionQuestion save(DefinitionQuestion q) {
        return this.questionRepository.save(q);
    }

    public List<DefinitionQuestion> findAll() {
        return this.questionRepository.findAll();
    }

    public Optional<DefinitionQuestion> findOne(long id) {
        return this.questionRepository.findById(id);
    }

    public void delete(long id) {
        this.questionRepository.deleteById(id);
    }

    public List<DefinitionQuestion> findByType(int type){
        return this.questionRepository.findByType(type);
    }

}