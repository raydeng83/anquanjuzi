package com.anquanjuzi.be.model.feed;

import com.anquanjuzi.be.model.Image;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Art implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String type;
    private String date;

    @OneToOne
    private Image image;

    @OneToOne
    @JsonIgnore
    private ArtContent artContent;

    public Art(){}

    public Art(String title, String type, String date) {
        this.title = title;
        this.type = type;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public ArtContent getArtContent() {
        return artContent;
    }

    public void setArtContent(ArtContent artContent) {
        this.artContent = artContent;
    }

    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        this.image = image;
    }
}
