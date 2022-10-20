package com.example.fullstackproject.fantasyleagueapi.components;

import com.example.fullstackproject.fantasyleagueapi.models.Player;
import com.example.fullstackproject.fantasyleagueapi.models.User;
import com.example.fullstackproject.fantasyleagueapi.repositories.PlayerRepository;
import com.example.fullstackproject.fantasyleagueapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PlayerRepository playerRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception{
        User user1 = new User("Sakusan","XI");

        userRepository.save(user1);

        Player player1 = new Player("Haaland","Striker",12,"https://resources.premierleague.com/premierleague/photos/players/110x140/p223094.png");

        playerRepository.save(player1);

        user1.addPlayerToUser(player1);

        userRepository.save(user1);
    }
}
