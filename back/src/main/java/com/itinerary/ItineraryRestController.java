package com.itinerary;

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
@RequestMapping("/api/itinerarys")
public class ItineraryRestController extends GeneralRestController {

    @GetMapping(value="/")
    public MappingJacksonValue itinerarys(){

        MappingJacksonValue result = new MappingJacksonValue(this.itineraryService.findAll());
        return result;

    }

    @GetMapping(value="/{id}")
    public ResponseEntity<Itinerary> itinerary(@PathVariable long id){

        Optional<Itinerary> q = this.itineraryService.findOne(id);

        if (q.isPresent()) {
            return new ResponseEntity<>(q.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @PostMapping(value="/")
    @ResponseStatus(HttpStatus.CREATED)
    public Itinerary newItinerarys(@RequestBody Itinerary itinerary){

        this.itineraryService.save(itinerary);
        return itinerary;
        
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Itinerary> deleteItinerarys(@PathVariable long id){

        Optional<Itinerary> q = this.itineraryService.findOne(id);
        
        if(q.isPresent()){
            this.itineraryService.delete(id);
            return new ResponseEntity<>(q.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Itinerary> updateItinerarys(@PathVariable long id, @RequestBody Itinerary itinerary){

        Optional<Itinerary> q = this.itineraryService.findOne(id);
        
        if(q.isPresent()){
            q.get().update(itinerary);
            this.itineraryService.save(q.get());
            return new ResponseEntity<>(q.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}