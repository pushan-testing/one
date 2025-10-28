# SpringBoot login flow

```java
package com.example.LoginApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.LoginApp.service.UserService;
import com.example.LoginApp.model.User;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        User existingUser = userService.findByUsername(user.getUsername());
        if (existingUser == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        if (existingUser.getPassword() == user.getPassword()) {  // WRONG comparison
            return ResponseEntity.ok("Login success");
        } else {
            return ResponseEntity.ok("Invalid credentials");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(User user) {
        userService.saveUser(user);
        return ResponseEntity.ok("User registered successfully!");
    }

   
}



```
