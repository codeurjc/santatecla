package com.itinerary;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.slide.*;

@Entity
public class Itinerary{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String name;

    @ManyToMany
    private List<Slide> slides;

    public Itinerary(){
        this.slides = new ArrayList<>();
    }

    public Itinerary(String name){
        this();
        this.name = name;
    }

    public void update(Itinerary itinerary) {
        this.name = itinerary.getName();
        this.slides = itinerary.getSlides();
    }

    public List compareId(List<Slide> slides) {
        List diferences = new ArrayList();
        List<Long> slidesId = new ArrayList();
        List<Long> inSlidesId = new ArrayList();
        for (Slide slide: this.getSlides()) {
            slidesId.add(slide.getId());
        }
        for (Slide slide: slides) {
            inSlidesId.add(slide.getId());
        }
        for (long id: slidesId) {
            if (!(inSlidesId.contains(id))) {
                diferences.add(id);
            }
        }
        return diferences;
    }

    /********************
     * GETTER AND SETTER *
     ********************/

    public long getId() { return id; }

    public String getName() { return name; }

    public List<Slide> getSlides() { return slides; }

    public void setId(long id) { this.id = id; }

    public void setName(String name) { this.name = name; }

    public void setSlides(List<Slide> slides) { this.slides = slides; }

}