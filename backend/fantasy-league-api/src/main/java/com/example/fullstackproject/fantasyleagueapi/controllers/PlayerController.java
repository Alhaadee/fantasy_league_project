package com.example.fullstackproject.fantasyleagueapi.controllers;

import com.example.fullstackproject.fantasyleagueapi.models.Player;
import com.example.fullstackproject.fantasyleagueapi.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/players")
@CrossOrigin(origins="http://localhost:8080")
public class PlayerController {

    @Autowired
    PlayerService playerService;


    @PostMapping
    public ResponseEntity<Player> addNewPlayer(@RequestBody Player player){
        Player savedPlayer = playerService.addNewPlayer(player);
        return new ResponseEntity<>(savedPlayer, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Player>> getAllPlayers(){
        List<Player> players = playerService.getAllPlayers();
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Player> getPlayerById(@PathVariable long id){
        Player player = playerService.getPlayerById(id);
        return new ResponseEntity<>(player , HttpStatus.OK);
    }

//    @GetMapping(value = "/get-player")
//    public Object getPlayer(){
//        String url = "https://fantasy.premierleague.com/api/bootstrap-static/";
//        RestTemplate restTemplate = new RestTemplate();
//        Object result = restTemplate.getForObject(url,Object.class);
//        return result;
//
//    }



}
