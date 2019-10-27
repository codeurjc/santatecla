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
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/definition")
public class DefinitionQuestionRestController extends GeneralRestController {

    @GetMapping("/")
    public ResponseEntity<List<DefinitionQuestion>> getQuestions() {
        return new ResponseEntity<>(this.definitionQuestionService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DefinitionQuestion> getQuestion(@PathVariable long id) {
        Optional<DefinitionQuestion> question = this.definitionQuestionService.findOne(id);
        if (question.isPresent()) {
            return new ResponseEntity<>(question.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/")
    public ResponseEntity<DefinitionQuestion> addQuestion(@RequestBody DefinitionQuestion question) {
        this.definitionQuestionService.save(question);

        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<DefinitionQuestion> deleteQuestion(@PathVariable long id) {

        Optional<DefinitionQuestion> question = this.definitionQuestionService.findOne(id);

        if (question.isPresent()) {
            this.definitionQuestionService.delete(id);
            return new ResponseEntity<>(question.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<DefinitionQuestion> updateQuestion(@PathVariable long id, @RequestBody DefinitionQuestion newQuestion) {

        Optional<DefinitionQuestion> oldQuestion = this.definitionQuestionService.findOne(id);

        if (oldQuestion.isPresent()) {
            oldQuestion.get().update(newQuestion);
            this.definitionQuestionService.save(oldQuestion.get());
            return new ResponseEntity<>(oldQuestion.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{id}")
    public ResponseEntity<DefinitionAnswer> addAnswer(@PathVariable long id, @RequestBody DefinitionAnswer answer) {

        Optional<DefinitionQuestion> question = this.definitionQuestionService.findOne(id);

        if (question.isPresent()) {
            DefinitionAnswer da = new DefinitionAnswer(answer.getAnswerText(), false);
            question.get().addAnswer(da);
            this.definitionQuestionService.save(question.get());
            return new ResponseEntity<>(answer, HttpStatus.CREATED);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{id}/answer")
    public ResponseEntity<List<DefinitionAnswer>> getAnswers(@PathVariable long id) {

        Optional<DefinitionQuestion> question = this.definitionQuestionService.findOne(id);

        if (question.isPresent()) {
            return new ResponseEntity<>(question.get().getAnswers(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{id1}/answer/{id2}")
    public ResponseEntity<DefinitionAnswer> addJustification(@PathVariable long id1, @PathVariable long id2, @RequestBody String justification) {

        Optional<DefinitionQuestion> question = this.definitionQuestionService.findOne(id1);

        if (question.isPresent()) {
            Optional<DefinitionAnswer> answer = this.definitionQuestionService.findOneAnswer(question.get(), id2);

            if (answer.isPresent()) {
                answer.get().setJustification(justification);
                this.definitionQuestionService.save(question.get());
                return new ResponseEntity<>(answer.get(), HttpStatus.CREATED);
            }
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    /*@PostMapping("/question/{id}/correct/")
    public ResponseEntity<DefinitionQuestion> addCorrectAnswer(@PathVariable long id){
        Optional<DefinitionQuestion> optional = this.definitionQuestionService.findOne(id);
        if(optional.isPresent()){
            optional.get().setCorrectAnswers(optional.get().getCorrectAnswers()+1);
            this.definitionQuestionService.save(optional.get());
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/question/{id}/wrong/")
    public ResponseEntity<DefinitionQuestion> addWrongAnswer(@PathVariable long id){
        Optional<DefinitionQuestion> optional = this.definitionQuestionService.findOne(id);
        if(optional.isPresent()){
            optional.get().setWrongAnswers(optional.get().getWrongAnswers()+1);
            this.definitionQuestionService.save(optional.get());
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/question/{id}/correct/")
    public ResponseEntity<Integer> getCorrectAnswers(@PathVariable long id){
        Optional<DefinitionQuestion> optional = this.definitionQuestionService.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<>(optional.get().getCorrectAnswers(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/question/{id}/wrong/")
    public ResponseEntity<Integer> getWrongAnswers(@PathVariable long id){
        Optional<DefinitionQuestion> optional = this.definitionQuestionService.findOne(id);
        if(optional.isPresent()){
            return new ResponseEntity<>(optional.get().getWrongAnswers(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }*/
}