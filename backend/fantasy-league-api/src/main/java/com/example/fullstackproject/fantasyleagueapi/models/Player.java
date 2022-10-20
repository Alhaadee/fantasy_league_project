package com.example.fullstackproject.fantasyleagueapi.models;

import javax.persistence.*;

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
    @Column
    private String name;

    @Column
    private String position;

    @Column
    private float transferValue;

    @Column
    private int totalPoints;

    @Column
    private int gameWeekPoints;

    @Column
    private String playerImage;

    public Player(String name, String position, float transferValue, int totalPoints, int gameWeekPoints, String playerImage) {
        this.name = name;
        this.position = position;
        this.transferValue = transferValue;
        this.totalPoints = totalPoints;
        this.gameWeekPoints = gameWeekPoints;
        this.playerImage = playerImage;
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

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
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
}
