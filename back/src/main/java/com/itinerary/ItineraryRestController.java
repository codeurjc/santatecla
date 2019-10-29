package com.itinerary;

import java.util.Optional;

import com.GeneralRestController;
import com.JViews.Summary;
import com.fasterxml.jackson.annotation.JsonView;
import com.slide.Slide;
import com.slide.practiceSlide.PracticeSlide;
import com.slide.theorySlide.TheorySlide;
import com.unit.Unit;

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

    @GetMapping(value="/{id}/summarized")
    @JsonView(Summary.class)
    public ResponseEntity<Itinerary> itinerarySumm(@PathVariable long id){

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

        Optional<Itinerary> i = this.itineraryService.findOne(id);
        
        if(i.isPresent()){
            i.get().update(itinerary);
            this.itineraryService.save(i.get());
            return new ResponseEntity<>(i.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping(value="/{itineraryId}/theorySlide")
    @ResponseStatus(HttpStatus.CREATED)
    public TheorySlide addTheorySlideToItinerary(@RequestBody TheorySlide slide, @PathVariable long itineraryId){

        Optional<Itinerary> i = this.itineraryService.findOne(itineraryId);

        this.theorySlideService.save(slide);

        i.get().getSlides().add(slide);
        this.itineraryService.save(i.get());

        return slide;
    }

    @PostMapping(value="/{itineraryId}/practiceSlide")
    @ResponseStatus(HttpStatus.CREATED)
    public PracticeSlide addPracticeSlideToItinerary(@RequestBody PracticeSlide slide, @PathVariable long itineraryId){

        Optional<Itinerary> i = this.itineraryService.findOne(itineraryId);

        this.practiceSlideService.save(slide);

        i.get().getSlides().add(slide);
        this.itineraryService.save(i.get());

        return slide;
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

    @PostMapping(value="/{itineraryId}/itinerary/{newItineraryId}")
    public ResponseEntity<Itinerary> addItineraryToItinerary(@PathVariable long itineraryId, @PathVariable long newItineraryId){

        Optional<Itinerary> itinerary = this.itineraryService.findOne(itineraryId);
        Optional<Itinerary> newItinerary = this.itineraryService.findOne(newItineraryId);

        if(itinerary.isPresent()){
            if(newItinerary.isPresent()){
                if(!itinerary.get().getItineraries().contains(newItinerary.get())){
                    itinerary.get().getItineraries().add(newItinerary.get());
                    this.itineraryService.save(itinerary.get());
                    return new ResponseEntity<>(itinerary.get(), HttpStatus.OK);
                }
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