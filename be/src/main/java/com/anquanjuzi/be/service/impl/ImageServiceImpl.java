package com.anquanjuzi.be.service.impl;

import com.anquanjuzi.be.model.Image;
import com.anquanjuzi.be.repository.ImageRepository;
import com.anquanjuzi.be.service.ImageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class ImageServiceImpl implements ImageService {

    private static final Logger logger = LoggerFactory.getLogger(ImageServiceImpl.class);

    @Value("${app.storagePath}")
    private String imageStoragePath;

    private final ImageRepository imageRepository;

    @Autowired
    public ImageServiceImpl(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    @Override
    public Image storeFile(MultipartFile file) throws IOException {
        String name = UUID.randomUUID().toString();
        String fileName = name + ".png";
        String path = imageStoragePath + "/" + fileName;
        File newFile = new File(path);
        file.transferTo(newFile);

        Image image = new Image();
        image.setFileName(fileName);
        image.setPath(imageStoragePath);
        image = imageRepository.save(image);

        return image;
    }

    @Override
    public Resource loadFile(Image image) {
        try {

            Path path = Paths.get(image.getPath());
            Path file = path.resolve(image.getFileName());
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                logger.warn("File not found: " + file.toString());
                return null;
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("FAIL!");
        }
    }
}
