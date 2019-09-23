package com.definition;

import java.util.List;

import com.GeneralRestController;
import com.definition.definition_answer.DefinitionAnswerService;
import com.definition.definition_justification.DefinitionJustificationService;
import com.definition.definition_question.DefinitionQuestion;
import com.definition.definition_question.DefinitionQuestionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/definition")
public class DefinitionRestController extends GeneralRestController{

    @Autowired
    private DefinitionQuestionService questionService;

    @Autowired
    private DefinitionAnswerService answerService;

    @Autowired
    private DefinitionJustificationService justificationService;

    @GetMapping("/question/")
    public ResponseEntity<List<DefinitionQuestion>> getQuestions(){
        return new ResponseEntity<List<DefinitionQuestion>>(this.questionService.getQuestions(), HttpStatus.OK);
    }

    @PostMapping("/question/")
    @ResponseStatus(HttpStatus.CREATED)
    public DefinitionQuestion addQuestion(@RequestBody DefinitionQuestion question){
        this.questionService.save(question);
    
        return question;
    }
}