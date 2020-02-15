package com.question;

import com.itinerary.block.Block;
import com.itinerary.module.Module;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;

    protected String subtype;
    protected String questionText;

    protected int totalAnswers;
    protected int totalCorrectAnswers;
    protected int totalWrongAnswers;

    @ManyToMany(fetch = FetchType.EAGER)
    protected List<Block> blocks;

    public Question() {
        this.subtype = this.getClass().getSimpleName();
        this.totalAnswers = 0;
        this.totalCorrectAnswers = 0;
        this.totalWrongAnswers = 0;
        this.blocks = new ArrayList<>();
    }

    public Question(String questionText) {
        this();
        this.questionText = questionText;
        this.blocks = new ArrayList<>();
    }

    /**
     * Getters and Setters
     */

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestionText() {
        return questionText;
    }

    public String getSubtype() {
        return subtype;
    }

    public int getTotalAnswers() {
        return totalAnswers;
    }

    public int getTotalCorrectAnswers() {
        return totalCorrectAnswers;
    }

    public int getTotalWrongAnswers() {
        return totalWrongAnswers;
    }

    public List<Block> getBlocks() {
        return blocks;
    }

    public void addBlock(Block block){
        this.blocks.add(block);
    }

    public void setSubtype(String subtype) {
        this.subtype = subtype;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public void setTotalAnswers(int totalAnswers) {
        this.totalAnswers = totalAnswers;
    }

    public void setTotalCorrectAnswers(int totalCorrectAnswers) {
        this.totalCorrectAnswers = totalCorrectAnswers;
    }

    public void setTotalWrongAnswers(int totalWrongAnswers) {
        this.totalWrongAnswers = totalWrongAnswers;
    }

    public void setBlocks(List<Block> blocks) {
        this.blocks = blocks;
    }

    public void addBlocks(List<Block> blocks) {
        this.blocks.addAll(blocks);
    }

    public void deleteBlocks(List<Block> blocks) {
        this.blocks.removeAll(blocks);
    }

    public void increaseTotalCorrectAnswers() {
        this.totalCorrectAnswers += 1;
        this.totalAnswers += 1;
    }

    public void increaseTotalWrongAnswers() {
        this.totalWrongAnswers += 1;
        this.totalAnswers += 1;
    }
}