package com.question;

import java.util.List;

import com.GeneralRestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/question")
public class QuestionRestController extends GeneralRestController {

    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping("/test")
    public ResponseEntity<List<Question>> getQuestions() {
        return new ResponseEntity<>(this.questionRepository.findAll(), HttpStatus.OK);
    }
}