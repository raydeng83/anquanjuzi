package com.anquanjuzi.be;

import com.anquanjuzi.be.model.Role;
import com.anquanjuzi.be.model.User;
import com.anquanjuzi.be.model.UserRole;
import com.anquanjuzi.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class BeApplication implements CommandLineRunner {

    private final UserService userService;

    @Autowired
    public BeApplication(UserService userService) {
        this.userService = userService;
    }

    public static void main(String[] args) {
        SpringApplication.run(BeApplication.class, args);
    }

    @Override
    public void run(String... args)  {
        User user1 = new User();

        user1.setFirstName("admin");
        user1.setLastName("admin");
        user1.setUsername("admin");
        user1.setPassword("password");
        user1.setEmail("admin@example.com");
        Set<UserRole> userRoles = new HashSet<>();
        Role role1 = new Role();
        role1.setName("ROLE_ADMIN");
        userRoles.add(new UserRole(user1, role1));
        userService.createUser(user1);
    }
}
