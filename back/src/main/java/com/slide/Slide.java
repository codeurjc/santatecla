package com.slide;

import javax.persistence.*;

@Entity
public class Slide {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String type;

    private String name;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String content;

    public Slide() {}

    public Slide(String name) {
        this();
        this.name = name;
        this.content = "=== " + name + "\n";
    }

    public Slide(String name, String content) {
        this();
        this.name = name;
        this.content = content;
    }

    public void update(Slide slide) { }

    public void addContent(String content) {
        this.content = this.content + content;
    }

    /********************
     * GETTER AND SETTER *
     ********************/

    public long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getName() { return name; }

    public String getContent() { return content; }

    public void setId(long id) {
        this.id = id;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setName(String name) { this.name = name; }

    public void setContent(String content) { this.content = content; }
}