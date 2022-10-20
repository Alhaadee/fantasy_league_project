package com.example.fullstackproject.fantasyleagueapi.repositories;

import com.example.fullstackproject.fantasyleagueapi.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends JpaRepository <Player, Long>  {

}