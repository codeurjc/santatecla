package com.view;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class View {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    // A view has ONE text, image etc or could have more?
    private String text;
    private long imagePath;
    private String code;

    public View() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public long getImagePath() {
        return imagePath;
    }

    public void setImagePath(long imagePath) {
        this.imagePath = imagePath;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

}