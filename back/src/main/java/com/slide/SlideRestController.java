package com.slide;

import java.util.List;
import java.util.Optional;

import com.GeneralRestController;
import com.card.Card;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/slides")
public class SlideRestController extends GeneralRestController {

    @GetMapping(value="/")
    public MappingJacksonValue slides(){

        MappingJacksonValue result = new MappingJacksonValue(this.slideService.findAll());
        return result;

    }

    @GetMapping(value="/{id}")
    public ResponseEntity<Slide> slide(@PathVariable long id){

        Optional<Slide> s = this.slideService.findOne(id);

        if (s.isPresent()) {
            return new ResponseEntity<>(s.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Slide> deleteSlide(@PathVariable long id){

        Optional<Slide> s = this.slideService.findOne(id);
        
        if(s.isPresent()){
            this.slideService.delete(id);
            return new ResponseEntity<>(s.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Slide> updateSlide(@PathVariable long id, @RequestBody Slide slide){

        Optional<Slide> s = this.slideService.findOne(id);
        
        if(s.isPresent()){
            s.get().update(slide);
            this.slideService.save(s.get());
            return new ResponseEntity<>(s.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/search")
    public ResponseEntity<List<Slide>> getSlideByName(@RequestParam String unitName, @RequestParam String lessonName, @RequestParam String slideName) {
        System.out.println(unitName);
        System.out.println(lessonName);
        System.out.println(slideName);
        List<Slide> slides = this.slideService.findByName(unitName, lessonName, slideName);
        if (slides.size() == 0) return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(slides, HttpStatus.OK);
    }

}