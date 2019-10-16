package com.question.definition;

import java.util.List;
import java.util.Optional;

import com.GeneralRestController;
import com.question.definition.definition_answer.DefinitionAnswer;
import com.question.definition.definition_answer.DefinitionAnswerService;
import com.question.definition.definition_justification.DefinitionJustificationService;
import com.question.definition.definition_question.DefinitionQuestion;
import com.question.definition.definition_question.DefinitionQuestionService;

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

    @GetMapping("/question/{id}")
    public ResponseEntity<DefinitionQuestion> getQuestion(@PathVariable long id){
        Optional<DefinitionQuestion> optional = this.questionService.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<DefinitionQuestion>(optional.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/question/")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<DefinitionQuestion> addQuestion(@RequestBody DefinitionQuestion question){
        this.questionService.save(question);
    
        return new ResponseEntity<>(question, HttpStatus.CREATED);
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
    public ResponseEntity<DefinitionAnswer> addAnswer(@PathVariable long id, @RequestBody DefinitionAnswer answer){
        Optional<DefinitionQuestion> question = this.questionService.findOne(id);
        
        if(question.isPresent()){
            question.get().getAnswers().add(answer);
            this.questionService.save(question.get());
            return new ResponseEntity<>(answer, HttpStatus.CREATED);
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

    @GetMapping(value="/question/type/{type}")
    public ResponseEntity<List<DefinitionQuestion>> getTypeQuestions(@PathVariable int type){
        return new ResponseEntity<List<DefinitionQuestion>>(questionService.findByType(type), HttpStatus.OK);
    }

    @PostMapping("/question/{id}/correct/")
    public ResponseEntity<DefinitionQuestion> addCorrectAnswer(@PathVariable long id){
        Optional<DefinitionQuestion> optional = this.questionService.findOne(id);
        if(optional.isPresent()){
            optional.get().setCorrectAnswers(optional.get().getCorrectAnswers()+1);
            this.questionService.save(optional.get());
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/question/{id}/wrong/")
    public ResponseEntity<DefinitionQuestion> addWrongAnswer(@PathVariable long id){
        Optional<DefinitionQuestion> optional = this.questionService.findOne(id);
        if(optional.isPresent()){
            optional.get().setWrongAnswers(optional.get().getWrongAnswers()+1);
            this.questionService.save(optional.get());
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/question/{id}/correct/")
    public ResponseEntity<Integer> getCorrectAnswers(@PathVariable long id){
        Optional<DefinitionQuestion> optional = this.questionService.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<Integer>(optional.get().getCorrectAnswers(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/question/{id}/wrong/")
    public ResponseEntity<Integer> getWrongAnswers(@PathVariable long id){
        Optional<DefinitionQuestion> optional = this.questionService.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<Integer>(optional.get().getWrongAnswers(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}