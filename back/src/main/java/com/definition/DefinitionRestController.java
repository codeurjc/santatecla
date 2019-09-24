package com.definition;

import java.util.List;
import java.util.Optional;

import com.GeneralRestController;
import com.definition.definition_answer.DefinitionAnswer;
import com.definition.definition_answer.DefinitionAnswerService;
import com.definition.definition_justification.DefinitionJustificationService;
import com.definition.definition_question.DefinitionQuestion;
import com.definition.definition_question.DefinitionQuestionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
        return new ResponseEntity<List<DefinitionQuestion>>(this.questionService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/question/")
    @ResponseStatus(HttpStatus.CREATED)
    public DefinitionQuestion addQuestion(@RequestBody DefinitionQuestion question){
        this.questionService.save(question);
    
        return question;
    }

    @DeleteMapping(value="/question/{id}")
    public ResponseEntity<DefinitionQuestion> deleteQuestion(@PathVariable long id){
        
        Optional<DefinitionQuestion> q = this.questionService.findOne(id);
        
        if(q.isPresent()){
            this.questionService.delete(id);
            return new ResponseEntity<>(q.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value="/question/{id}")
    public ResponseEntity<DefinitionQuestion> updateQuestion(@PathVariable long id, @RequestBody DefinitionQuestion newQuestion){
        
        Optional<DefinitionQuestion> oldQuestion = this.questionService.findOne(id);
        
        if(oldQuestion.isPresent()){
            oldQuestion.get().update(newQuestion);
            this.questionService.save(oldQuestion.get());
            return new ResponseEntity<>(oldQuestion.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/question/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<DefinitionQuestion> addAnswer(@PathVariable long id, @RequestBody DefinitionAnswer answer){
        Optional<DefinitionQuestion> question = this.questionService.findOne(id);
        
        if(question.isPresent()){
            question.get().getAnswers().add(answer);
            this.questionService.save(question.get());
            return new ResponseEntity<>(question.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value="/question/{id}/answer")
    public ResponseEntity<List<DefinitionAnswer>> getAnswers(@PathVariable long id){
        Optional<DefinitionQuestion> question = this.questionService.findOne(id);

        if(question.isPresent()){
            return new ResponseEntity<>(question.get().getAnswers(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}