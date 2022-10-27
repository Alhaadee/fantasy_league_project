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
import java.util.Arrays;
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
        User sakusan = new User("Sakusan","XI","sakusan@test.com",password);
        User alhaadee = new User("Al-Haadee","XI","alhaadee@test.com","12345");
        User veron = new User("Veron","XI","veron@test.com","12345");
        User tio = new User("Tio","XI","tio@test.com","12345");
        User guy = new User("Guy","XI","guy@test.com","12345");
        User tariq = new User("Tariq","XI","tariq@test.com","12345");

        alhaadee.setGWScore(41);
        alhaadee.setOverallScore(540);


        veron.setGWScore(64);
        veron.setOverallScore(505);

        tio.setGWScore(45);
        tio.setOverallScore(506);

        guy.setGWScore(36);
        guy.setOverallScore(440);

        tariq.setGWScore(74);
        tariq.setOverallScore(291);



        userRepository.saveAll(Arrays.asList(sakusan,alhaadee,veron,tio,guy,tariq));

        Player player1 = new Player("Haaland",4,122.0F,"https://resources.premierleague.com/premierleague/photos/players/110x140/p223094.png",318);
        Player player2 = new Player("James",2,59.0F,"https://resources.premierleague.com/premierleague/photos/players/110x140/p225796.png",146);
        Player player3 = new Player("Ederson",1,54.0F,"https://resources.premierleague.com/premierleague/photos/players/110x140/p121160.png",307);
        Player player4 = new Player("De Bruyne",3,123.0F,"https://resources.premierleague.com/premierleague/photos/players/110x140/p61366.png",301);
        Player player5 = new Player("Kante",3,48.0F,"https://resources.premierleague.com/premierleague/photos/players/110x140/p116594.png",134);




        playerRepository.save(player1);
        playerRepository.save(player2);
        playerRepository.save(player3);
        playerRepository.save(player4);
        playerRepository.save(player5);



        sakusan.addPlayerToUser(player1);
        sakusan.addPlayerToUser(player2);
        sakusan.addPlayerToUser(player3);
        sakusan.addPlayerToUser(player4);
        sakusan.addPlayerToUser(player5);

        sakusan.setOverallScore(512);

        userRepository.save(sakusan);

    }
}
