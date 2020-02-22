package com.itinerary.lesson;

import java.util.List;
import java.util.Optional;

import com.GeneralRestController;
import com.slide.Slide;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/lessons")
public class LessonRestController extends GeneralRestController {

    @GetMapping(value="/")
    public MappingJacksonValue lessons(){
        MappingJacksonValue result = new MappingJacksonValue(this.lessonService.findAll());
        return result;
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<Lesson> lesson(@PathVariable long id){
        Optional<Lesson> lesson = this.lessonService.findOne(id);
        if (lesson.isPresent()) {
            return new ResponseEntity<>(lesson.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Lesson> deleteLesson(@PathVariable long id){
        Optional<Lesson> lesson = this.lessonService.findOne(id);
        if(lesson.isPresent()){
            this.lessonService.delete(id);
            return new ResponseEntity<>(lesson.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Lesson> updateLesson(@PathVariable long id, @RequestBody Lesson lesson){
        for (Slide slide: lesson.getSlides()) {
            Slide s = this.slideService.findOne(slide.getId()).get();
            s.update(slide);
            this.slideService.save(s);
        }
        Optional<Lesson> l = this.lessonService.findOne(id);
        if (l.isPresent()) {
            List<Long> diferences = l.get().compareId(lesson.getSlides());
            for (long diferenceId: diferences) {
                this.slideService.delete(diferenceId);
            }
            lesson.setSlides(l.get().getSlides());
            l.get().update(lesson);
            this.lessonService.save(l.get());
            return new ResponseEntity<>(l.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}