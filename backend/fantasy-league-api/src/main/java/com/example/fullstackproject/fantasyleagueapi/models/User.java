package com.example.fullstackproject.fantasyleagueapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name="users")
public class User {


    @Column
    private String userName;

    @Column
    private String teamName;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @ManyToMany
    @JoinTable(
            name = "users_players",
            joinColumns = {@JoinColumn(name = "user_id",nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "player_id",nullable = false)}
    )
    @JsonIgnoreProperties({"users"})
    private List<Player> players;

    @Column
    private int overallScore;

    @Column
    private int gameWeekScore;

    @Column
    private float transferBudget;

    public User(String userName, String teamName){
        this.userName = userName;
        this.teamName = teamName;
        this.overallScore = 0;
        this.gameWeekScore = 0;
        this.transferBudget = 100.00F;
        this.players = new ArrayList<>();

    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public int getOverallScore() {
        return overallScore;
    }

    public void setOverallScore(int overallScore) {
        this.overallScore = overallScore;
    }

    public int getGWScore() {
        return gameWeekScore;
    }

    public void setGWScore(int GWScore) {
        this.gameWeekScore = GWScore;
    }

    public float getTransferBudget() {
        return transferBudget;
    }

    public void setTransferBudget(float transferBudget) {
        this.transferBudget = transferBudget;
    }

    public User(){

    }
    public void addPlayerToUser(Player player){
        this.players.add(player);
    }

    public void removePlayerFromUser(Player player){
        this.players.remove(player);
    }










}
