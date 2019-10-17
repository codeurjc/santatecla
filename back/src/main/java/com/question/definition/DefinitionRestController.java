package com.question.definition;

import java.util.List;
import java.util.Optional;

import com.GeneralRestController;
import com.question.definition.definition_answer.DefinitionAnswer;
import com.question.definition.definition_question.DefinitionQuestion;

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

    @GetMapping("/question/")
    public ResponseEntity<List<DefinitionQuestion>> getQuestions(){
        return new ResponseEntity<>(this.definitionQuestionService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/question/{id}")
    public ResponseEntity<DefinitionQuestion> getQuestion(@PathVariable long id){
        Optional<DefinitionQuestion> optional = this.definitionQuestionService.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<>(optional.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/question/")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<DefinitionQuestion> addQuestion(@RequestBody DefinitionQuestion question){
        this.definitionQuestionService.save(question);
    
        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @DeleteMapping(value="/question/{id}")
    public ResponseEntity<DefinitionQuestion> deleteQuestion(@PathVariable long id){
        
        Optional<DefinitionQuestion> q = this.definitionQuestionService.findOne(id);
        
        if(q.isPresent()){
            this.definitionQuestionService.delete(id);
            return new ResponseEntity<>(q.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value="/question/{id}")
    public ResponseEntity<DefinitionQuestion> updateQuestion(@PathVariable long id, @RequestBody DefinitionQuestion newQuestion){
        
        Optional<DefinitionQuestion> oldQuestion = this.definitionQuestionService.findOne(id);
        
        if(oldQuestion.isPresent()){
            oldQuestion.get().update(newQuestion);
            this.definitionQuestionService.save(oldQuestion.get());
            return new ResponseEntity<>(oldQuestion.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/question/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<DefinitionAnswer> addAnswer(@PathVariable long id, @RequestBody DefinitionAnswer answer){
        Optional<DefinitionQuestion> question = this.definitionQuestionService.findOne(id);
        
        if(question.isPresent()){
            question.get().getAnswers().add(answer);
            this.definitionQuestionService.save(question.get());
            return new ResponseEntity<>(answer, HttpStatus.CREATED);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value="/question/{id}/answer")
    public ResponseEntity<List<DefinitionAnswer>> getAnswers(@PathVariable long id){
        Optional<DefinitionQuestion> question = this.definitionQuestionService.findOne(id);

        if(question.isPresent()){
            return new ResponseEntity<>(question.get().getAnswers(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value="/question/type/{type}")
    public ResponseEntity<List<DefinitionQuestion>> getTypeQuestions(@PathVariable int type){
        return new ResponseEntity<>(definitionQuestionService.findByType(type), HttpStatus.OK);
    }
}