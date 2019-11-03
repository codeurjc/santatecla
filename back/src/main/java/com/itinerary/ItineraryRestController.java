package com.itinerary;

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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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

        for (Slide slide: itinerary.getSlides()) {
            Optional<Slide> s = this.slideService.findOne(slide.getId());
            this.slideService.save(slide);
        }

        Optional<Itinerary> i = this.itineraryService.findOne(id);

        List<Long> diferences = i.get().compareId(itinerary.getSlides());
        for (long diferenceId: diferences) {
            this.slideService.delete(diferenceId);
        }

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
                //i.get().getSlides().remove(s.get());
                this.itineraryService.save(i.get());
                this.slideService.delete(slideId);
                return new ResponseEntity<>(i.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}