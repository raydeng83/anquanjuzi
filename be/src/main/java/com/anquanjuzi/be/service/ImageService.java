package com.anquanjuzi.be.service;

import com.anquanjuzi.be.model.Image;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ImageService {
    Image storeFile(MultipartFile file) throws IOException;
    Resource loadFile(Image image);
}
