package com.anquanjuzi.be.service.impl;

import com.anquanjuzi.be.model.Message;
import com.anquanjuzi.be.repository.MessageRepository;
import com.anquanjuzi.be.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Override
    public void saveMessage(Message message) {
        messageRepository.save(message);
    }
}
