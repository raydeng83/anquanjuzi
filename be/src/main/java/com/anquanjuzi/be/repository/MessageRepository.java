package com.anquanjuzi.be.repository;

import com.anquanjuzi.be.model.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageRepository extends CrudRepository<Message, Long> {
}
