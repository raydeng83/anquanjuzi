package com.anquanjuzi.be.controller;

import com.anquanjuzi.be.model.Image;
import com.anquanjuzi.be.repository.ImageRepository;
import com.anquanjuzi.be.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/image")
public class ImageController {

    private final ImageService imageService;
    private final ImageRepository imageRepository;

    @Autowired
    public ImageController(ImageService imageService, ImageRepository imageRepository) {
        this.imageService = imageService;
        this.imageRepository = imageRepository;
    }

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public Image uploadImages(@RequestParam MultipartFile file) throws IOException {

        try {
            Image image = imageService.storeFile(file);
            return image;
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping(value = "/getImage/{id}")
    @ResponseBody
    public ResponseEntity<Resource> getFile(@PathVariable String id) {
        Long imageId = Long.parseLong(id);
        Image image = imageRepository.findById(imageId).get();
        Resource file = imageService.loadFile(image);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }
}
