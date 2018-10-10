package com.anquanjuzi.be.service;

import com.anquanjuzi.be.model.User;
import javassist.NotFoundException;

public interface UserService {
    User getUserByUsername(String username);

    User createUser(User user);

    User getUserByEmail(String email);

    User getUserById(Long id);

    User updateUser(User user) throws NotFoundException;

    void updatePassword(User user, String newPassword);
}
