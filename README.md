# SpringBoot login flow

```java
package com.example.LoginApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.LoginApp.service.UserService;
import com.example.LoginApp.dto.LoginRequestDTO;
import com.example.LoginApp.dto.RegisterRequestDTO;
import com.example.LoginApp.model.User;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequestDTO login) {
        User u = userService.findByUsername(login.getUsername());
        if (u == null) return ResponseEntity.badRequest().body("User not found");
        if (u.getPassword() == login.getPassword())
            return ResponseEntity.ok("Login success");
        return ResponseEntity.ok("Invalid credentials");
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(RegisterRequestDTO dto) {
        User user = new User();
        user.setUsername(dto.username);
        user.setPassword(dto.getPassword());
        userService.saveUser(user);
        return ResponseEntity.ok("User registered");
    }
}


package com.example.LoginApp.dto;

public class LoginRequestDTO {
    private String username;
    private String password;

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
}


package com.example.LoginApp.dto;

public class RegisterRequestDTO {
    public String username;
    private String password;

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}



```
