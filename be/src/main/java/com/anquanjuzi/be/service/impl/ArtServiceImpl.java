package com.anquanjuzi.be.service.impl;

import com.anquanjuzi.be.model.Image;
import com.anquanjuzi.be.model.feed.Art;
import com.anquanjuzi.be.model.feed.ArtContent;
import com.anquanjuzi.be.repository.ArtContentRepository;
import com.anquanjuzi.be.repository.ArtRepository;
import com.anquanjuzi.be.repository.ImageRepository;
import com.anquanjuzi.be.service.ArtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.util.UUID;

@Service
public class ArtServiceImpl implements ArtService {


    private final ArtRepository artRepository;
    private final ArtContentRepository artContentRepository;
    private final ImageRepository imageRepository;

    @Autowired
    public ArtServiceImpl(ArtRepository artRepository, ArtContentRepository artContentRepository, ImageRepository imageRepository) {
        this.artRepository = artRepository;
        this.artContentRepository = artContentRepository;
        this.imageRepository = imageRepository;
    }

    @Override
    public void saveArt(Art art, String content, String originalUrl, String imageId) {
        art = artRepository.save(art);

        ArtContent artContent = new ArtContent();
        artContent.setArt(art);
        artContent.setContent(content);
        artContent.setOriginalUrl(originalUrl);


        artContent = artContentRepository.save(artContent);

        Image image = imageRepository.findById(Long.parseLong(imageId)).get();
        art.setArtContent(artContent);
        art.setImage(image);
        artContentRepository.save(artContent);

        image.setArt(art);
        imageRepository.save(image);
    }


}
