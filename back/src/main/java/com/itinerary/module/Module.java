package com.itinerary.module;

import com.itinerary.block.Block;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Module extends Block {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    @ManyToMany
    private List<Block> blocks;

    public Module(){
        this.blocks = new ArrayList<>();
    }

    public Module(String name){
        super(name);
        this.blocks = new ArrayList<>();
    }

    public void addBlock(Block block){
        this.blocks.add(block);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Block> getBlocks() {
        return blocks;
    }

    public void setBlocks(List<Block> blocks) {
        this.blocks = blocks;
    }
}
