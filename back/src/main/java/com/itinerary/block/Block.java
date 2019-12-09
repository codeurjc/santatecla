package com.itinerary.block;

import javax.persistence.*;

@Entity
public class Block {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;

    protected String name;

    public Block(){}

    public Block(String name){
        this();
        this.name = name;
    }

    /********************
     * GETTER AND SETTER *
     ********************/

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

}
