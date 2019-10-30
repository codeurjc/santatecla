package com.question.test;

import com.GeneralRestController;
import com.question.test.test_answer.TestAnswer;
import com.question.test.test_question.TestQuestion;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/test")
public class TestQuestionRestController extends GeneralRestController {

    @GetMapping("/")
    public ResponseEntity<List<TestQuestion>> getQuestions() {
        return new ResponseEntity<>(this.testQuestionService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TestQuestion> getQuestion(@PathVariable long id) {
        Optional<TestQuestion> optional = this.testQuestionService.findOne(id);
        if (optional.isPresent()) {
            return new ResponseEntity<>(optional.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/")
    public ResponseEntity<TestQuestion> addQuestion(@RequestBody TestQuestion question) {
        this.testQuestionService.save(question);

        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<TestQuestion> deleteQuestion(@PathVariable long id) {

        Optional<TestQuestion> question = this.testQuestionService.findOne(id);

        if (question.isPresent()) {
            this.testQuestionService.delete(id);
            return new ResponseEntity<>(question.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<TestQuestion> updateQuestion(@PathVariable long id, @RequestBody TestQuestion newQuestion) {

        Optional<TestQuestion> oldQuestion = this.testQuestionService.findOne(id);

        if (oldQuestion.isPresent()) {
            oldQuestion.get().update(newQuestion);
            this.testQuestionService.save(oldQuestion.get());
            return new ResponseEntity<>(oldQuestion.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{id}")
    public ResponseEntity<TestAnswer> addAnswer(@PathVariable long id, @RequestBody TestAnswer answer) {

        Optional<TestQuestion> question = this.testQuestionService.findOne(id);

        if (question.isPresent()) {
            question.get().addAnswer(answer);
            if(answer.isCorrect()){
                question.get().setTotalCorrectAnswers(question.get().getTotalCorrectAnswers() + 1);
            }
            else {
                question.get().setTotalWrongAnswers(question.get().getTotalWrongAnswers() + 1);
            }
            this.testQuestionService.save(question.get());
            return new ResponseEntity<>(answer, HttpStatus.CREATED);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{id}/answer")
    public ResponseEntity<List<TestAnswer>> getAnswers(@PathVariable long id) {

        Optional<TestQuestion> question = this.testQuestionService.findOne(id);

        if (question.isPresent()) {
            return new ResponseEntity<>(question.get().getTestAnswers(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}/answer/user/{userId}")
    public ResponseEntity<List<Object>> getUserAnswers(@PathVariable long id, @PathVariable long userId) {
        return new ResponseEntity<>(this.testQuestionService.findUserAnswers(userId, id), HttpStatus.OK);
    }
}