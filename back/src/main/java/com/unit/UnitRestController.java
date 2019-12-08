package com.unit;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.GeneralRestController;
import com.itinerary.lesson.Lesson;
import com.relation.Relation;

import javax.servlet.http.HttpServletResponse;

import com.slide.Slide;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/units")
public class UnitRestController extends GeneralRestController {

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

    /*@GetMapping(value = "/{unitId}/question/answer/{userId}/distinct")
    public ResponseEntity<Integer> getUserAnswerDistinctCount(@PathVariable long unitId, @PathVariable long userId) {
        return new ResponseEntity<>(this.unitService.getUserDistinctAnswer(unitId, userId), HttpStatus.OK);
    }*/
}