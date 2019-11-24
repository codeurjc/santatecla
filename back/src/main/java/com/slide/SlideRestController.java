package com.slide;

import java.util.Optional;

import com.GeneralRestController;
import com.card.Card;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}