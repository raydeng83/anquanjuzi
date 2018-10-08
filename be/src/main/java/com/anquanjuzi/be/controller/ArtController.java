package com.anquanjuzi.be.controller;

import com.anquanjuzi.be.model.feed.Art;
import com.anquanjuzi.be.model.feed.ArtContent;
import com.anquanjuzi.be.repository.ArtContentRepository;
import com.anquanjuzi.be.repository.ArtRepository;
import com.anquanjuzi.be.service.ArtService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/art")
public class ArtController {

    private final ArtRepository artRepository;
    private final ArtService artService;
    private final ArtContentRepository artContentRepository;

    @Autowired
    public ArtController(ArtRepository artRepository, ArtService artService, ArtContentRepository artContentRepository) {
        this.artRepository = artRepository;
        this.artService = artService;
        this.artContentRepository = artContentRepository;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public void receiveMessage(@RequestBody HashMap<String, String> mapper) {
        ObjectMapper om = new ObjectMapper();

        String title = (String) om.convertValue(mapper.get("title"), Object.class);
        String type = (String) om.convertValue(mapper.get("type"), Object.class);
        String date = (String) om.convertValue(mapper.get("date"), Object.class);
        String content = (String) om.convertValue(mapper.get("content"), Object.class);

        Art art = new Art(title, type, date, "");

        artService.saveArt(art, content);
    }

    @RequestMapping("/getArtList")
    public List<Art> getArtList(){
        List<Art> artList = (List<Art>) artRepository.findAll();
        return artList;
    }

    @RequestMapping("/getArtContent/{id}")
    public ArtContent getArtContentById(@PathVariable Long id){
        Art art = artRepository.findById(id).get();
        ArtContent artContent = artContentRepository.findByArt(art);

        return artContent;
    }
}
