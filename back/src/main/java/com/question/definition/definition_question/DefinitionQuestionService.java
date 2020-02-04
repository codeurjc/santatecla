package com.question.definition.definition_question;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.question.Question;
import com.question.definition.definition_answer.DefinitionAnswer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DefinitionQuestionService {

    @Autowired
    private DefinitionQuestionRepository definitionRepository;

    public DefinitionQuestion save(DefinitionQuestion q) {
        return this.definitionRepository.save(q);
    }

    public void delete(long id) {
        this.definitionRepository.deleteById(id);
    }

    public List<DefinitionQuestion> findAll() {
        return this.definitionRepository.findAll();
    }

    public Optional<DefinitionQuestion> findOne(long id) {
        return this.definitionRepository.findById(id);
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

    public List<Object> findUserAnswers(long userId, long questionId) {
        return this.definitionRepository.findUserAnswers(userId, questionId);
    }

    public Optional<List<DefinitionAnswer>> findCorrectedAnswers(long questionId) {
        Optional<DefinitionQuestion> question = this.findOne(questionId);

        if (question.isPresent()) {
            List<DefinitionAnswer> list = new ArrayList<>();
            for(DefinitionAnswer answer : question.get().getAnswers()) {
                if (answer.isCorrected()) {
                    list.add(answer);
                }
            }
            return Optional.of(list);
        }
        return Optional.empty();
    }

    public Optional<List<DefinitionAnswer>> findNotCorrectedAnswers(long questionId) {
        Optional<DefinitionQuestion> question = this.findOne(questionId);

        if (question.isPresent()) {
            List<DefinitionAnswer> list = new ArrayList<>();
            for(DefinitionAnswer answer : question.get().getAnswers()) {
                if (!answer.isCorrected()) {
                    list.add(answer);
                }
            }
            return Optional.of(list);
        }
        return Optional.empty();
    }


}