package com.anquanjuzi.be.controller;

import com.anquanjuzi.be.model.User;
import com.anquanjuzi.be.repository.UserRepository;
import com.anquanjuzi.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @RequestMapping("/registration")
    public User registration(@RequestBody User user) {
        user = userService.createUser(user);

        return user;
    }

    @RequestMapping("/checkExistingUser")
    public Map checkUsername(@RequestBody User user) {
        String username = user.getUsername();
        if(userRepository.findByUsername(username) != null) {
            return Collections.singletonMap("res", "username exists");
        }

        String email = user.getEmail();
        if(userRepository.findByEmail(email) != null) {
            return Collections.singletonMap("res", "email exists");
        }

        return Collections.singletonMap("res", "fine");

    }
}
