package com.unit;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.GeneralRestController;
import com.card.Card;
import com.card.CardService;
import com.itinerary.lesson.Lesson;
import com.question.Question;
import com.question.definition.definition_answer.DefinitionAnswer;
import com.question.definition.definition_question.DefinitionQuestion;
import com.question.list.list_answer.ListAnswer;
import com.question.list.list_question.ListQuestion;
import com.question.test.test_answer.TestAnswer;
import com.question.test.test_question.TestQuestion;
import com.relation.Relation;
import com.relation.RelationService;

import javax.servlet.http.HttpServletResponse;

import com.slide.Slide;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/units")
public class UnitRestController extends GeneralRestController {

    @Autowired
    protected UnitService unitService;

    @Autowired
    protected RelationService relationService;

    @Autowired
    protected CardService cardService;

    @GetMapping(value = "/")
    public ResponseEntity<List<Unit>> getUnits() {
        return new ResponseEntity<>(this.unitService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Unit> getUnit(@PathVariable int id) {
        Optional<Unit> unit = this.unitService.findOne(id);
        if (unit.isPresent()) {
            return new ResponseEntity<>(unit.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(value = "/")
    public ResponseEntity<Unit> createUnit(@RequestBody Unit unit) {
        Unit savedUnit = new Unit();
        updateUnit(savedUnit, unit);
        this.unitService.save(savedUnit);
        return new ResponseEntity<>(savedUnit, HttpStatus.OK);
    }

    @PutMapping(value = "/")
    public ResponseEntity<List<Unit>> updateUnits(@RequestBody List<Unit> units) {
        List<Unit> savedUnits = new ArrayList<>();
        for (Unit unit : units) {
            Optional<Unit> savedUnit = this.unitService.findOne(unit.getId());
            if (savedUnit.isPresent()) {
                updateUnit(savedUnit.get(), unit);
                this.unitService.save(savedUnit.get());
                savedUnits.add(savedUnit.get());
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<>(savedUnits, HttpStatus.OK);
    }

    private void updateUnit(Unit savedUnit, Unit unit) {
        savedUnit.setName(unit.getName());
        for (Relation relation : unit.getIncomingRelations()) {
            if ((relation.getIncoming() != 0) && (relation.getOutgoing() != 0)) {
                if (relation.getId() > 0) {
                    savedUnit.addIncomingRelation(relation);
                } else {
                    Relation r;
                    Optional<Relation> relationByIncomingAndOutgoing = relationService.findRelationByIncomingAndOutgoing(relation.getIncoming(), relation.getOutgoing());
                    r = relationByIncomingAndOutgoing.orElseGet(() -> new Relation(relation.getRelationType(), relation.getIncoming(), relation.getOutgoing()));
                    relationService.save(r);
                    savedUnit.addIncomingRelation(r);
                }
            }
        }
        for (Relation relation : unit.getOutgoingRelations()) {
            if ((relation.getIncoming() != 0) && (relation.getOutgoing() != 0)) {
                if (relation.getId() > 0) {
                    savedUnit.addOutgoingRelation(relation);
                } else {
                    Relation r;
                    Optional<Relation> relationByIncomingAndOutgoing = relationService.findRelationByIncomingAndOutgoing(relation.getIncoming(), relation.getOutgoing());
                    r = relationByIncomingAndOutgoing.orElseGet(() -> new Relation(relation.getRelationType(), relation.getIncoming(), relation.getOutgoing()));
                    relationService.save(r);
                    savedUnit.addOutgoingRelation(r);
                }
            }
        }
    }

    @GetMapping(value = "/{id}/absoluteName")
    public ResponseEntity<Unit> getUnitAbsoluteName(@PathVariable int id) {
        Optional<Unit> unit = this.unitService.findOne(id);
        return unit.map(value -> new ResponseEntity<>(new Unit(unitService.getAbsoluteName(value)), HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value="/{id}/parent")
    public ResponseEntity<Unit> getUnitParent(@PathVariable int id) {
        Optional<Unit> unit = this.unitService.findOne(id);
        return unit.map(value -> new ResponseEntity<>(unitService.getParent(value), HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value="/search/{name}")
    public ResponseEntity<List<Unit>> searchUnits(@PathVariable String name) {
        List<Unit> units = this.unitService.findByNameContaining(name);
        return new ResponseEntity<>(units, HttpStatus.OK);
    }

    @GetMapping(value = "/{unitId}/cards")
    public ResponseEntity<Iterable<Card>> getCards(@PathVariable int unitId) {
        Optional<Unit> unit = this.unitService.findOne(unitId);
        if (unit.isPresent()) {
            return new ResponseEntity<Iterable<Card>>(unit.get().getCards(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(value = "/{unitId}/cards/{cardId}")
    public ResponseEntity<Card> uploadCard(@PathVariable long unitId, @PathVariable long cardId, @RequestBody Card card) {
        Optional<Unit> unit = unitService.findOne(unitId);
        if (!unit.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Card updatedCard = unit.get().getCard(cardId);
        if (updatedCard == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        updatedCard.update(card);
        cardService.save(updatedCard);
        return new ResponseEntity<>(updatedCard, HttpStatus.OK);
    }

    /*@RequestMapping(value = "/{unitId}/cards/{cardId}/image", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<Card> uploadCardImage(@PathVariable long unitId, @PathVariable long cardId, @RequestParam(value = "image") MultipartFile image) {
		Optional<Unit> unit = unitService.findOne(unitId);
		if (!unit.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Card card = unit.get().getCard(cardId);
        if (card == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        cardService.setImage(card, image);
        cardService.save(card);
        return new ResponseEntity<Card>(card, HttpStatus.OK);
    }

    @RequestMapping(value = "/{unitId}/cards/{cardId}", method = RequestMethod.GET)
    public ResponseEntity<Card> getCardImage(@PathVariable long unitId, @PathVariable long cardId, HttpServletResponse response) {
        Optional<Unit> unit = unitService.findOne(unitId);
        if (!unit.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Card card = unit.get().getCard(cardId);
        return new ResponseEntity<Card>(card, HttpStatus.OK);
    }*/

    @RequestMapping(value = "/{unitId}/cards/{cardId}", method = RequestMethod.GET)
    public ResponseEntity<Card> getCard(@PathVariable long unitId, @PathVariable long cardId, HttpServletResponse response) {
        Optional<Unit> unit = unitService.findOne(unitId);
        if (!unit.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Optional<Card> card = cardService.findOne(cardId);
        if (!card.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Card>(card.get(), HttpStatus.OK);
    }

    @RequestMapping(value = "/{unitId}/lessons/{lessonId}/slides/{slideId}", method = RequestMethod.GET)
    public ResponseEntity<Slide> getSlideFromLesson(@PathVariable long unitId, @PathVariable long lessonId, @PathVariable long slideId, HttpServletResponse response) {
        Optional<Unit> unit = unitService.findOne(unitId);
        if (!unit.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Optional<Lesson> lesson = lessonService.findOne(lessonId);
        if (!lesson.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Optional<Slide> slide = slideService.findOne(slideId);
        if (!slide.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Slide>(slide.get(), HttpStatus.OK);
    }

    @PostMapping(value = "/{unitId}/lessons")
    @ResponseStatus(HttpStatus.CREATED)
    public Lesson addLesson(@RequestBody Lesson lesson, @PathVariable long unitId) {

        Optional<Unit> unit = this.unitService.findOne(unitId);

        this.lessonService.save(lesson);

        unit.get().getLessons().add(lesson);
        this.unitService.save(unit.get());

        return lesson;
    }

    @DeleteMapping(value = "/{unitId}/lessons/{lessonId}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Lesson> deleteLesson(@PathVariable long lessonId, @PathVariable long unitId) {

        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<Lesson> lesson = this.lessonService.findOne(lessonId);
            if (lesson.isPresent()) {
                unit.get().getLessons().remove(lesson.get());
                this.lessonService.delete(lessonId);
                return new ResponseEntity<>(lesson.get(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @GetMapping(value = "/{unitId}/question/{qId}")
    public ResponseEntity<Question> getQuestion(@PathVariable long unitId, @PathVariable long qId) {
        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<Question> question = this.questionService.findOne(qId);
            if (question.isPresent()) {
                return new ResponseEntity<>(question.get(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{unitId}/question/definition")
    public ResponseEntity<List<DefinitionQuestion>> getDefinitionQuestions(@PathVariable long unitId) {
        Optional<Unit> unit = this.unitService.findOne(unitId);
        return (unit.isPresent()) ? (new ResponseEntity<>(unit.get().getDefinitionQuestions(), HttpStatus.OK)) : (new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/{unitId}/question/definition")
    public ResponseEntity<DefinitionQuestion> addDefinitionQuestion(@PathVariable long unitId, @RequestBody DefinitionQuestion question) {

        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            this.definitionQuestionService.save(question);
            unit.get().addDefinitionQuestion(question);
            this.unitService.save(unit.get());
            return new ResponseEntity<>(question, HttpStatus.CREATED);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{unitId}/question/definition/{id}")
    public ResponseEntity<DefinitionQuestion> deleteDefinitionQuestion(@PathVariable long unitId, @PathVariable long id) {

        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<DefinitionQuestion> question = this.definitionQuestionService.findOne(id);
            if (question.isPresent()) {
                this.definitionQuestionService.delete(id);
                return new ResponseEntity<>(question.get(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{unitId}/question/definition/{id}/answer")
    public ResponseEntity<List<DefinitionAnswer>> getDefinitionAnswers(@PathVariable long unitId, @PathVariable long id) {
        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<DefinitionQuestion> question = this.definitionQuestionService.findOne(id);

            if (question.isPresent()) {
                return new ResponseEntity<>(question.get().getAnswers(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{unitId}/question/definition/{id}/answer")
    public ResponseEntity<DefinitionAnswer> addDefinitionAnswer(@PathVariable long unitId, @PathVariable long id, @RequestBody DefinitionAnswer answer) {
        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<DefinitionQuestion> question = this.definitionQuestionService.findOne(id);
            if (question.isPresent()) {
                question.get().addAnswer(answer);
                this.definitionQuestionService.save(question.get());
                return new ResponseEntity<>(answer, HttpStatus.CREATED);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{unitId}/question/definition/{qId}/answer/{aId}")
    public ResponseEntity<DefinitionAnswer> updateDefinitionAnswer(@PathVariable long unitId, @PathVariable long qId, @PathVariable long aId, @RequestBody DefinitionAnswer newAnswer) {
        Optional<Unit> unit = this.unitService.findOne(unitId);
        Optional<DefinitionQuestion> question = this.definitionQuestionService.findOne(qId);
        System.out.println(unit.isPresent());
        System.out.println(question.isPresent());

        if (unit.isPresent() && question.isPresent()) {
            Optional<DefinitionAnswer> oldAnswer = this.definitionQuestionService.findOneAnswer(question.get(), aId);
            System.out.println(oldAnswer.isPresent());
            if (oldAnswer.isPresent()) {
                oldAnswer.get().update(newAnswer);
                question.get().getAnswers().remove(oldAnswer.get());
                question.get().addAnswer(oldAnswer.get());
                this.definitionQuestionService.save(question.get());
                return new ResponseEntity<>(oldAnswer.get(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{unitId}/question/list")
    public ResponseEntity<List<ListQuestion>> getListQuestions(@PathVariable long unitId) {
        Optional<Unit> unit = this.unitService.findOne(unitId);
        return (unit.isPresent()) ? (new ResponseEntity<>(unit.get().getListQuestions(), HttpStatus.OK)) : (new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/{unitId}/question/list")
    public ResponseEntity<ListQuestion> addListQuestion(@PathVariable long unitId, @RequestBody ListQuestion question) {

        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            this.listQuestionService.save(question);
            unit.get().addListQuestion(question);
            this.unitService.save(unit.get());
            return new ResponseEntity<>(question, HttpStatus.CREATED);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{unitId}/question/list/{id}")
    public ResponseEntity<ListQuestion> deleteListQuestion(@PathVariable long unitId, @PathVariable long id) {

        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<ListQuestion> question = this.listQuestionService.findOne(id);
            if (question.isPresent()) {
                this.listQuestionService.delete(id);
                return new ResponseEntity<>(question.get(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @GetMapping(value = "/{unitId}/question/list/{id}/answer")
    public ResponseEntity<List<ListAnswer>> getListAnswers(@PathVariable long unitId, @PathVariable long id) {
        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<ListQuestion> question = this.listQuestionService.findOne(id);

            if (question.isPresent()) {
                return new ResponseEntity<>(question.get().getListAnswers(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{unitId}/question/list/{id}/answer")
    public ResponseEntity<ListAnswer> addListAnswer(@PathVariable long unitId, @PathVariable long id, @RequestBody ListAnswer answer) {
        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<ListQuestion> question = this.listQuestionService.findOne(id);
            if (question.isPresent()) {
                question.get().addAnswer(answer);
                this.listQuestionService.save(question.get());
                return new ResponseEntity<>(answer, HttpStatus.CREATED);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{unitId}/question/test")
    public ResponseEntity<List<TestQuestion>> getTestQuestions(@PathVariable long unitId) {
        Optional<Unit> unit = this.unitService.findOne(unitId);
        return (unit.isPresent()) ? (new ResponseEntity<>(unit.get().getTestQuestions(), HttpStatus.OK)) : (new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/{unitId}/question/test")
    public ResponseEntity<TestQuestion> addTestQuestion(@PathVariable long unitId, @RequestBody TestQuestion question) {

        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            this.testQuestionService.save(question);
            unit.get().addTestQuestion(question);
            this.unitService.save(unit.get());
            return new ResponseEntity<>(question, HttpStatus.CREATED);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{unitId}/question/test/{id}")
    public ResponseEntity<TestQuestion> deleteTestQuestion(@PathVariable long unitId, @PathVariable long id) {

        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<TestQuestion> question = this.testQuestionService.findOne(id);
            if (question.isPresent()) {
                this.testQuestionService.delete(id);
                return new ResponseEntity<>(question.get(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{unitId}/question/test/{id}/answer")
    public ResponseEntity<List<TestAnswer>> getTestAnswers(@PathVariable long unitId, @PathVariable long id) {
        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<TestQuestion> question = this.testQuestionService.findOne(id);

            if (question.isPresent()) {
                return new ResponseEntity<>(question.get().getTestAnswers(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{unitId}/question/test/{id}/answer")
    public ResponseEntity<TestAnswer> addTestAnswer(@PathVariable long unitId, @PathVariable long id, @RequestBody TestAnswer answer) {
        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<TestQuestion> question = this.testQuestionService.findOne(id);
            if (question.isPresent()) {
                question.get().addAnswer(answer);
                this.testQuestionService.save(question.get());
                return new ResponseEntity<>(answer, HttpStatus.CREATED);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}