package com.example.fullstackproject.fantasyleagueapi.services;

import com.example.fullstackproject.fantasyleagueapi.models.Player;
import com.example.fullstackproject.fantasyleagueapi.models.User;
import com.example.fullstackproject.fantasyleagueapi.repositories.PlayerRepository;
import com.example.fullstackproject.fantasyleagueapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PlayerRepository playerRepository;



    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User addNewUser(User user){
        user.setTransferBudget(100.00F);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode(user.getPassword());
        user.setPassword(password);
        userRepository.save(user);
        return user;
    }

    public void removeUser(Long id){
        userRepository.deleteById(id);
    }

    public void addPlayerToUser(Long playerId,Long userId){
        User targetUser = userRepository.findById(userId).get();
        Player targetPlayer = playerRepository.findById(playerId).get();
        List<Player> playerList =  targetUser.getPlayers();
        playerList.add(targetPlayer);
        targetUser.setPlayers(playerList);
        updateTransferBudget(userId);
        userRepository.save(targetUser);
    }

    public void removePlayerFromUser(Long playerId, Long userId){
        User targetUser = userRepository.findById(userId).get();
        Player targetPlayer = playerRepository. findById(playerId).get();
        List<Player> playerList =  targetUser.getPlayers();
        playerList.remove(targetPlayer);
        targetUser.setPlayers(playerList);
        addToTransferBudget(userId,targetPlayer);
        userRepository.save(targetUser);
    }
    
    public User findUserById(Long userId){
        User targetUser = userRepository.findById(userId).get();
        return targetUser;
    }

    public void updateTransferBudget(Long userId){
        float spentBudget = 0;
        User targetUser = userRepository.findById(userId).get();
        for (Player player:targetUser.getPlayers()){
            spentBudget += player.getTransferValue()/10;
        }
        float currentBudget = targetUser.getTransferBudget();
        targetUser.setTransferBudget(currentBudget-spentBudget);
    }

    public void addToTransferBudget(Long userId, Player targetPlayer){
        float spentBudget = 0;
        User targetUser = userRepository.findById(userId).get();
        Player removedPlayer = playerRepository.findById(targetPlayer.getId()).get();

        float currentBudget = targetUser.getTransferBudget();
        targetUser.setTransferBudget(currentBudget + removedPlayer.getTransferValue()/10);
    }

}
