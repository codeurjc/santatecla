package com.definition;

import java.util.List;

import com.GeneralRestController;
import com.definition.definition_answer.DefinitionAnswerRepository;
import com.definition.definition_justification.DefinitionJustificationRepository;
import com.definition.definition_question.DefinitionQuestion;
import com.definition.definition_question.DefinitionQuestionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/definitions")
public class DefinitionRestController extends GeneralRestController{

    @Autowired
    private DefinitionAnswerRepository answerRepository;

    @Autowired
    private DefinitionJustificationRepository justificationRepository;

    @Autowired
    private DefinitionQuestionRepository questionRepository;

    @GetMapping("/question/")
    public ResponseEntity<List<DefinitionQuestion>> getQuestions(){
        return new ResponseEntity<List<DefinitionQuestion>>(this.questionRepository.findAll(), HttpStatus.OK);
    }
}