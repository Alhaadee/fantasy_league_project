package com.example.fullstackproject.fantasyleagueapi.repositories;

import com.example.fullstackproject.fantasyleagueapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    List<User> findByUserName(String userName);
    Optional<User> findByEmail(String email);
}
