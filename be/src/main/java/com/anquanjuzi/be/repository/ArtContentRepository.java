package com.anquanjuzi.be.repository;

import com.anquanjuzi.be.model.feed.Art;
import com.anquanjuzi.be.model.feed.ArtContent;
import org.springframework.data.repository.CrudRepository;

public interface ArtContentRepository extends CrudRepository<ArtContent, Long> {
    ArtContent findByArt(Art art);
}
