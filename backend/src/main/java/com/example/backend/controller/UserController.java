package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
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

    @GetMapping("/checkuser")
    public ResponseEntity<Boolean> checkUser(@RequestParam String username) {
        if (username == null || username.isEmpty()) {
            return ResponseEntity.badRequest().body(false);
        }
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(true);
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
        Map<String, Object> response = new HashMap<>();
        String token = "dummy-token"; // Generate or retrieve a real token
        response.put("token", token);
        response.put("userData", user);
        return ResponseEntity.ok(response);
    }
}

class BadRequestException extends RuntimeException {
    public BadRequestException(String message) {
        super(message);
    }
}