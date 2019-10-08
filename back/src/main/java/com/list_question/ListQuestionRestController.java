package com.list_question;
import java.util.List;

import com.GeneralRestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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

}