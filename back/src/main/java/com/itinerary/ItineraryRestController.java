package com.itinerary;

import java.util.Optional;

import com.GeneralRestController;
import com.slide.Slide;

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
@RequestMapping("/api/itineraries")
public class ItineraryRestController extends GeneralRestController {

    @GetMapping(value="/")
    public MappingJacksonValue itineraries(){

        MappingJacksonValue result = new MappingJacksonValue(this.itineraryService.findAll());
        return result;

    }

    @GetMapping(value="/{id}")
    public ResponseEntity<Itinerary> itinerary(@PathVariable long id){

        Optional<Itinerary> i = this.itineraryService.findOne(id);

        if (i.isPresent()) {
            return new ResponseEntity<>(i.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @PostMapping(value="/")
    @ResponseStatus(HttpStatus.CREATED)
    public Itinerary newItinerary(@RequestBody Itinerary itinerary){

        this.itineraryService.save(itinerary);
        return itinerary;
        
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Itinerary> deleteItinerary(@PathVariable long id){

        Optional<Itinerary> i = this.itineraryService.findOne(id);
        
        if(i.isPresent()){
            this.itineraryService.delete(id);
            return new ResponseEntity<>(i.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Itinerary> updateItinerary(@PathVariable long id, @RequestBody Itinerary itinerary){

        Optional<Itinerary> i = this.itineraryService.findOne(id);
        
        if(i.isPresent()){
            i.get().update(itinerary);
            this.itineraryService.save(i.get());
            return new ResponseEntity<>(i.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value="/{itineraryId}/slide/{slideId}")
    public ResponseEntity<Itinerary> deleteSlideFromItinerary(@PathVariable long slideId, @PathVariable long itineraryId){
        
        Optional<Itinerary> i =this.itineraryService.findOne(itineraryId);
        Optional<Slide> s = this.slideService.findOne(slideId);
        
        if(i.isPresent()){
            if(s.isPresent()){
                i.get().getSlides().remove(s.get());
                this.itineraryService.save(i.get());
                this.slideService.delete(slideId);
                return new ResponseEntity<>(i.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value="/{itineraryId}/itinerary/{itineraryId_2}")
    public ResponseEntity<Itinerary> deleteItineraryFromItinerary(@PathVariable long itineraryId_2, @PathVariable long itineraryId){
        
        Optional<Itinerary> i =this.itineraryService.findOne(itineraryId);
        Optional<Itinerary> i2 = this.itineraryService.findOne(itineraryId_2);
        
        if(i.isPresent()){
            if(i2.isPresent()){
                i.get().getItineraries().remove(i2.get());
                this.itineraryService.save(i.get());
                return new ResponseEntity<>(i.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}