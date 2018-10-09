package com.anquanjuzi.be.service;

import com.anquanjuzi.be.model.Image;
import com.anquanjuzi.be.model.feed.Art;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ArtService {
    void saveArt(Art art, String content, String originalUrl, String imageId);

}
