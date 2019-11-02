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

    @Column(columnDefinition = "MEDIUMTEXT")
    private String content;

    @ManyToMany
    private List<Slide> slides;

    public Itinerary(){
        this.slides = new ArrayList<>();
    }

    public Itinerary(String name){
        this();
        this.name = name;
        this.content = "== " + name + "\n";
    }

    public void update(Itinerary itinerary) {
        this.name = itinerary.getName();
        this.content = itinerary.getContent();
        this.slides = itinerary.getSlides();
    }

    /********************
     * GETTER AND SETTER *
     ********************/

    public long getId() { return id; }

    public String getName() { return name; }

    public List<Slide> getSlides() { return slides; }

    public String getContent() { return content; }

    public void setId(long id) { this.id = id; }

    public void setName(String name) { this.name = name; }

    public void setSlides(List<Slide> slides) { this.slides = slides; }

    public void setContent(String content) { this.content = content; }
}