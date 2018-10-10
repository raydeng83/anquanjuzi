package com.anquanjuzi.be.controller;

import com.anquanjuzi.be.model.User;
import com.anquanjuzi.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/registration")
    public User registration(@RequestBody User user) {
        user = userService.createUser(user);

        return user;
    }
}
