package com.anquanjuzi.be.service;

import com.anquanjuzi.be.model.feed.Art;

public interface ArtService {
    void saveArt(Art art, String content, String originalUrl);
}
