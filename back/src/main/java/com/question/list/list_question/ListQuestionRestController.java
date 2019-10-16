package com.question.list.list_question;
import java.util.List;
import java.util.Optional;

import com.GeneralRestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/definitionList")
public class ListQuestionRestController extends GeneralRestController{
    
    @Autowired
    private ListQuestionService service;

    @GetMapping("/")
    public ResponseEntity<List<ListQuestion>> getQuestions(){
        return new ResponseEntity<List<ListQuestion>>(this.service.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ListQuestion> getQuestion(@PathVariable long id){
        Optional<ListQuestion> optional = this.service.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<ListQuestion>(optional.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{id}/correct/")
    public ResponseEntity<ListQuestion> addCorrectAnswer(@PathVariable long id){
        Optional<ListQuestion> optional = this.service.findOne(id);
        if(optional.isPresent()){
            optional.get().setCorrectAnswers(optional.get().getCorrectAnswers()+1);
            this.service.save(optional.get());
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{id}/wrong/")
    public ResponseEntity<ListQuestion> addWrongAnswer(@PathVariable long id){
        Optional<ListQuestion> optional = this.service.findOne(id);
        if(optional.isPresent()){
            optional.get().setWrongAnswers(optional.get().getWrongAnswers()+1);
            this.service.save(optional.get());
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}/correct/")
    public ResponseEntity<Integer> getCorrectAnswers(@PathVariable long id){
        Optional<ListQuestion> optional = this.service.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<Integer>(optional.get().getCorrectAnswers(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}/wrong/")
    public ResponseEntity<Integer> getWrongAnswers(@PathVariable long id){
        Optional<ListQuestion> optional = this.service.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<Integer>(optional.get().getWrongAnswers(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}