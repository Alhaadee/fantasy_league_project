package com.example.fullstackproject.fantasyleagueapi.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping(value = "/data")
public class DataController {

    @GetMapping(value = "/players")
    public ResponseEntity<Object> getPlayers(){
        String url = "https://fantasy.premierleague.com/api/bootstrap-static/";
        RestTemplate restTemplate = new RestTemplate();
        Object result = restTemplate.getForObject(url,Object.class);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(value = "/fixtures")
    public ResponseEntity<Object> getFixtures(){
        String url = "https://fantasy.premierleague.com/api/fixtures/";
        RestTemplate restTemplate = new RestTemplate();
        Object result = restTemplate.getForObject(url,Object.class);
        return new ResponseEntity<>(result,HttpStatus.OK);
    }



}
