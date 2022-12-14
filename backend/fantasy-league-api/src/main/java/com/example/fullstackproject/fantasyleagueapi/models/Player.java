package com.example.fullstackproject.fantasyleagueapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @ManyToMany //  might need an extra look
    @JoinTable(
            name = "users_players",
            joinColumns = {@JoinColumn(name = "player_id",nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "user_id",nullable = false)}
    )

    @JsonIgnoreProperties("players")
    private List<User> users;

    @Column
    private String name;

    @Column
    private int position;

    @Column
    private float transferValue;

    @Column
    private int totalPoints;

    @Column
    private int gameWeekPoints;

    @Column
    private String playerImage;

    @Column
    int APIid;

    public Player(String name, int position, float transferValue, String playerImage,int APIid) {
        this.name = name;
        this.position = position;
        this.transferValue = transferValue;
        this.totalPoints = 0;
        this.gameWeekPoints = 0;
        this.playerImage = playerImage;
        this.users = new ArrayList<>();
        this.APIid = APIid;
    }

    public Player () {

    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public float getTransferValue() {
        return transferValue;
    }

    public void setTransferValue(float transferValue) {
        this.transferValue = transferValue;
    }

    public int getTotalPoints() {
        return totalPoints;
    }

    public void setTotalPoints(int totalPoints) {
        this.totalPoints = totalPoints;
    }

    public int getGameWeekPoints() {
        return gameWeekPoints;
    }

    public void setGameWeekPoints(int gameWeekPoints) {
        this.gameWeekPoints = gameWeekPoints;
    }

    public String getPlayerImage() {
        return playerImage;
    }

    public void setPlayerImage(String playerImage) {
        this.playerImage = playerImage;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public int getAPIid() {
        return APIid;
    }

    public void setAPIid(int APIid) {
        this.APIid = APIid;
    }
}
