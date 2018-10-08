package com.anquanjuzi.be.service.impl;

import com.anquanjuzi.be.model.feed.Art;
import com.anquanjuzi.be.model.feed.ArtContent;
import com.anquanjuzi.be.repository.ArtContentRepository;
import com.anquanjuzi.be.repository.ArtRepository;
import com.anquanjuzi.be.service.ArtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArtServiceImpl implements ArtService {

    private final ArtRepository artRepository;
    private final ArtContentRepository artContentRepository;

    @Autowired
    public ArtServiceImpl(ArtRepository artRepository, ArtContentRepository artContentRepository) {
        this.artRepository = artRepository;
        this.artContentRepository = artContentRepository;
    }

    @Override
    public void saveArt(Art art, String content) {
        art = artRepository.save(art);

        ArtContent artContent = new ArtContent();
        artContent.setArt(art);
        artContent.setContent(content);
        artContent = artContentRepository.save(artContent);

        art.setArtContent(artContent);
        artContentRepository.save(artContent);
    }
}
