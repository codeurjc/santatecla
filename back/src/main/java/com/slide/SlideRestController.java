package com.slide;

import java.util.Optional;

import com.GeneralRestController;

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
import org.springframework.web.bind.annotation.ResponseStatus;
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

        Optional<Slide> q = this.slideService.findOne(id);

        if (q.isPresent()) {
            return new ResponseEntity<>(q.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @PostMapping(value="/")
    @ResponseStatus(HttpStatus.CREATED)
    public Slide newSlide(@RequestBody Slide slide){

        this.slideService.save(slide);
        return slide;
        
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Slide> deleteSlide(@PathVariable long id){

        Optional<Slide> q = this.slideService.findOne(id);
        
        if(q.isPresent()){
            this.slideService.delete(id);
            return new ResponseEntity<>(q.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Slide> updateQuote(@PathVariable long id, @RequestBody Slide slide){

        Optional<Slide> q = this.slideService.findOne(id);
        
        if(q.isPresent()){
            q.get().update(slide);
            this.slideService.save(q.get());
            return new ResponseEntity<>(q.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}