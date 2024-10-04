package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map; // Import Map
import java.util.HashMap; // Import HashMap
import com.example.backend.model.User;
import com.example.backend.common.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("/api")
public class UserController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }

    @PostMapping("/createuser")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            return ResponseEntity.badRequest().body(null);
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        return ResponseEntity.status(201).body(savedUser);
    }
    //Store the creator/user email when registering(Local storage)
    //fetch from checkuser endpoint using email to get creator id
    //Use id to finish creating collection
    //In collections map through the collections like the recipes page
    //Do the same handlesubmit for the single recipe page
    @GetMapping("/checkuser")
    public ResponseEntity<User> checkUserExists(@RequestParam String username) {
        User user = userRepository.findByUsername(username);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password");
        User user = userRepository.findByUsername(username);
        if (user == null || !passwordEncoder.matches(password, user.getPassword())) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Invalid username or password");
            return ResponseEntity.badRequest().body(errorResponse);
        }
        Map<String, Object> response = new HashMap<>(); // Define response
        String token = "dummy-token"; // Generate or retrieve a real token
        response.put("token", token);
        response.put("userData", user);
        return ResponseEntity.ok(response);
    }
}