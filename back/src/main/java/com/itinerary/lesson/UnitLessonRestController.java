package com.itinerary.lesson;

import java.util.Optional;

import com.GeneralRestController;
import com.slide.Slide;

import com.unit.Unit;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/units")
public class UnitLessonRestController extends GeneralRestController implements UnitLessonController{

    @GetMapping(value = "/{unitId}/lessons/{lessonId}/slides/{slideId}")
    public ResponseEntity<Slide> getSlideFromLesson(@PathVariable long unitId, @PathVariable long lessonId, @PathVariable long slideId, HttpServletResponse response) {
        Optional<Unit> unit = unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<Lesson> lesson = lessonService.findOne(lessonId);
            if (lesson.isPresent()) {
                Optional<Slide> slide = slideService.findOne(slideId);
                if (slide.isPresent()) {
                    return new ResponseEntity<>(slide.get(), HttpStatus.OK);
                }
            }
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value = "/{unitId}/lessons")
    public ResponseEntity<Lesson> addLesson(@RequestBody Lesson lesson, @PathVariable long unitId) {
        Optional<Unit> unit = this.unitService.findOne(unitId);
        if(unit.isPresent()){
            this.lessonService.save(lesson);
            unit.get().getLessons().add(lesson);
            this.unitService.save(unit.get());

            return new ResponseEntity<>(lesson, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
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

}