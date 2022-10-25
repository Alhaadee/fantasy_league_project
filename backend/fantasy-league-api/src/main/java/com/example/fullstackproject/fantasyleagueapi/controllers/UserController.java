package com.example.fullstackproject.fantasyleagueapi.controllers;

import com.example.fullstackproject.fantasyleagueapi.models.User;
import com.example.fullstackproject.fantasyleagueapi.repositories.UserRepository;
import com.example.fullstackproject.fantasyleagueapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user") // should be users
@CrossOrigin(origins="http://localhost:8080")
public class UserController {

    @Autowired
    UserService userService;




   @GetMapping
   public ResponseEntity<List<User>> getAllUsers(){
       List<User> users = userService.getAllUsers();
       return new ResponseEntity<>(users,HttpStatus.OK);
   }

    @PostMapping
    public ResponseEntity<User> addNewUser(@RequestBody User user){
    User newUser = userService.addNewUser(user);
    return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/addPlayer")
    public ResponseEntity<User> addPlayerToUser(
            @RequestParam Long userId,
            @RequestParam Long playerId
    ){
        userService.addPlayerToUser(playerId,userId);
        User targetUser = userService.findUserById(userId);
        return new ResponseEntity<>(targetUser, HttpStatus.OK);
    }

    @PutMapping("/removePlayer")
    public ResponseEntity<User> removePlayerFromUser(
            @RequestParam Long userId,
            @RequestParam Long playerId
    ){
       userService.removePlayerFromUser(playerId,userId);
       User targetUser = userService.findUserById(userId);
       return new ResponseEntity<>(targetUser,HttpStatus.OK);
    }

}
