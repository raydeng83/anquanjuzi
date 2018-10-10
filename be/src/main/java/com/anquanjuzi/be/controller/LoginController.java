package com.anquanjuzi.be.controller;

import com.anquanjuzi.be.model.User;
import com.anquanjuzi.be.repository.RoleRepository;
import com.anquanjuzi.be.repository.UserRepository;
import com.anquanjuzi.be.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.HashMap;

@RestController
public class LoginController {
    private final UserService userService;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public LoginController(UserService userService, UserRepository userRepository, RoleRepository roleRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @RequestMapping("/login")
    public ResponseEntity<String> logout(
            @RequestParam("logout") String logout
    ){
        return new ResponseEntity<>("Logout success.", HttpStatus.OK);
    }

    @RequestMapping(value = "/user/logout", method = RequestMethod.POST)
    public void logout(HttpServletRequest request, Principal principal) {
        String username = principal.getName();
        String sessionId = request.getSession().getId();

    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public void authenticate(
            @RequestBody HashMap<String, Object> mapper
    ){
        ObjectMapper om = new ObjectMapper();
        String username = (String) mapper.get("username");
        String password = (String) mapper.get("password");

    }

    @RequestMapping("/test")
    public String test() {
        return "test";
    }

    @RequestMapping("/checkLoggedIn")
    public HttpStatus checkLoggedIn() {
        return HttpStatus.OK;
    }

    @RequestMapping("/checkSession")
    public User checkSession(Principal principal) {
        User user = userService.getUserByUsername(principal.getName());

        return user;
    }
}
