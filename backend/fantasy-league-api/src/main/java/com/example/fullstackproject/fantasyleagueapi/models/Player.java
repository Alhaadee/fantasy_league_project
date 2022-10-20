package com.example.fullstackproject.fantasyleagueapi.models;

public class Player {

    private long id;

    private String name;

    private String position;

    private float transferValue;

    private int totalPoints;

    private int gameWeekPoints;

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