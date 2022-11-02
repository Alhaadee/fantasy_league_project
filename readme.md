# Fantasy Football Full-Stack Project

## Overview

This project is a full-stack application replicating a fantasy football game where you can compete against other users and view the latest data of football fixtures, player stats, and more

Users are able to:
* Create an account with an email and password.
* Choose Players for their fantasy football team with a limited budget.
* Gain score if their players do well during real games.
* View the leaderboard of all users' scores.
* View information of past and upcoming fixtures.
* Search for players and find their detailed statistics.

This repository includes a RESTful API developed with spring boot and secured with JWT as well as a website that was created with react.  The Data of users and the football players is stored locally using a Postgresql database.

The [fantasy premier league api](https://fantasy.premierleague.com/api/bootstrap-static/) was used to source all football data.

## Setup

1. create a postgresql database called `fantasy_football`
	* You may be required to input your postgresql username and password in `backend/fantasy-league-api/src/main/resources/application.properties`

2. Run the application in `/backend/fantasy-league-api` 
3. Run `npm init` and `npm start` in the command line in `/frontend/fantasy-league`
4. A webpage should open in your browser at local host 3000
