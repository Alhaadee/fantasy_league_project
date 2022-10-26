package com.example.fullstackproject.fantasyleagueapi.components;

import com.example.fullstackproject.fantasyleagueapi.models.Player;
import com.example.fullstackproject.fantasyleagueapi.models.User;
import com.example.fullstackproject.fantasyleagueapi.repositories.PlayerRepository;
import com.example.fullstackproject.fantasyleagueapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode("12345");
        User user1 = new User("Sakusan","XI","sakusan@test.com",password);

        userRepository.save(user1);

        Player player1 = new Player("Haaland",4,12.00F,"https://resources.premierleague.com/premierleague/photos/players/110x140/p223094.png",318);
        Player player2 = new Player("James",2,6.00F,"https://resources.premierleague.com/premierleague/photos/players/110x140/p225796.png",146);
        Player player3 = new Player("Ederson",1,6.00F,"https://resources.premierleague.com/premierleague/photos/players/110x140/p121160.png",307);
        Player player4 = new Player("De Bruyne",3,10.00F,"https://resources.premierleague.com/premierleague/photos/players/110x140/p61366.png",301);
        Player player5 = new Player("Kante",3,5.00F,"https://resources.premierleague.com/premierleague/photos/players/110x140/p116594.png",134);

        playerRepository.save(player1);
        playerRepository.save(player2);
        playerRepository.save(player3);
        playerRepository.save(player4);
        playerRepository.save(player5);


        user1.addPlayerToUser(player1);
        user1.addPlayerToUser(player2);
        user1.addPlayerToUser(player3);
        user1.addPlayerToUser(player4);
        user1.addPlayerToUser(player5);

        userRepository.save(user1);

    }
}
