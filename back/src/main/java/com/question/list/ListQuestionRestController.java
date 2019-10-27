package com.question.list;
import java.util.List;
import java.util.Optional;

import com.GeneralRestController;

import com.question.list.list_answer.ListAnswer;
import com.question.list.list_question.ListQuestion;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/definitionList")
public class ListQuestionRestController extends GeneralRestController{

    @GetMapping("/")
    public ResponseEntity<List<ListQuestion>> getQuestions(){
        return new ResponseEntity<>(this.listQuestionService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ListQuestion> getQuestion(@PathVariable long id){
        Optional<ListQuestion> optional = this.listQuestionService.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<>(optional.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/")
    public ResponseEntity<ListQuestion> addQuestion(@RequestBody ListQuestion question) {
        this.listQuestionService.save(question);

        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<ListQuestion> deleteQuestion(@PathVariable long id) {

        Optional<ListQuestion> question = this.listQuestionService.findOne(id);

        if (question.isPresent()) {
            this.listQuestionService.delete(id);
            return new ResponseEntity<>(question.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<ListQuestion> updateQuestion(@PathVariable long id, @RequestBody ListQuestion newQuestion) {

        Optional<ListQuestion> oldQuestion = this.listQuestionService.findOne(id);

        if (oldQuestion.isPresent()) {
            oldQuestion.get().update(newQuestion);
            this.listQuestionService.save(oldQuestion.get());
            return new ResponseEntity<>(oldQuestion.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{id}/answer")
    public ResponseEntity<ListQuestion> addAnswer2(@PathVariable long id, @RequestBody ListAnswer answer){
        Optional<ListQuestion> optional = this.listQuestionService.findOne(id);
        if(optional.isPresent()){
            ListQuestion question = optional.get();
            question.addAnswer(answer);
            if(answer.isCorrect()){
                question.setCorrectAnswerCount(question.getCorrectAnswerCount() + 1);
            }
            else {
                question.setWrongAnswerCount(question.getWrongAnswerCount() + 1);
            }
            this.listQuestionService.save(question);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}/answer/user/{userId}")
    public ResponseEntity<List<Object>> getUserAnswers(@PathVariable long id, @PathVariable long userId) {
        return new ResponseEntity<List<Object>>(this.listQuestionService.findUserAnswers(userId, id), HttpStatus.OK);
    }

    /*@PostMapping("/{id}/wrong/")
    public ResponseEntity<ListQuestion> addWrongAnswer(@PathVariable long id){
        Optional<ListQuestion> optional = this.listQuestionService.findOne(id);
        if(optional.isPresent()){
            optional.get().setWrongAnswers(optional.get().getWrongAnswers()+1);
            this.listQuestionService.save(optional.get());
            return new ResponseEntity<>(HttpStatus.CREATED);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}/correct/")
    public ResponseEntity<Integer> getCorrectAnswers(@PathVariable long id){
        Optional<ListQuestion> optional = this.listQuestionService.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<>(optional.get().getCorrectAnswersCount(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}/wrong/")
    public ResponseEntity<Integer> getWrongAnswers(@PathVariable long id){
        Optional<ListQuestion> optional = this.listQuestionService.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<>(optional.get().getWrongAnswers(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }*/


}