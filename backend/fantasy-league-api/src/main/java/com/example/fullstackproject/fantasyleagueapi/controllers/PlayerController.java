package com.example.fullstackproject.fantasyleagueapi.controllers;

import com.example.fullstackproject.fantasyleagueapi.models.Player;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/players")
public class PlayerController {


    @PostMapping
    public ResponseEntity<Player> addNewPlayer(@RequestBody Player player){}

    @GetMapping
    public ResponseEntity<List<Player>> getAllPlayers(){}

    @GetMapping(value = "/{id}")
    public ResponseEntity<Player> getPlayerById(@PathVariable long id){}



}
