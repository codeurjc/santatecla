package com.definition.definition_question;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DefinitionQuestionService {

    @Autowired
    private DefinitionQuestionRepository questionRepository;

    public DefinitionQuestion save(DefinitionQuestion q) {
        return this.questionRepository.save(q);
    }

    public List<DefinitionQuestion> getQuestions() {
        return this.questionRepository.findAll();
    }

}