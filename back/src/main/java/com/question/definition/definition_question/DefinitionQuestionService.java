package com.question.definition.definition_question;

import java.util.List;
import java.util.Optional;

import com.question.definition.definition_answer.DefinitionAnswer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DefinitionQuestionService {

    @Autowired
    private DefinitionQuestionRepository questionRepository;

    public DefinitionQuestion save(DefinitionQuestion q) {
        return this.questionRepository.save(q);
    }

    public void delete(long id) {
        this.questionRepository.deleteById(id);
    }

    public List<DefinitionQuestion> findAll() {
        return this.questionRepository.findAll();
    }

    public Optional<DefinitionQuestion> findOne(long id) {
        return this.questionRepository.findById(id);
    }

    public List<DefinitionQuestion> findByType(DefinitionQuestion.Type type){
        return this.questionRepository.findByType(type);
    }

    public Optional<DefinitionAnswer> findOneAnswer(DefinitionQuestion question, long answerId) {
        for (DefinitionAnswer answer: question.getAnswers()) {
            if (answer.getId() == answerId) {
                Optional<DefinitionAnswer> optional = Optional.of(answer);
                return optional;
            }
        }
        return Optional.empty();
    }

}