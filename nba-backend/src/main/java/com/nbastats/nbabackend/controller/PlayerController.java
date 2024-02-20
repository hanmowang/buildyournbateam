package com.nbastats.nbabackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.nbastats.nbabackend.entity.Player;
import com.nbastats.nbabackend.service.PlayerService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping(path = "/api/players")
public class PlayerController {
    @Autowired
    private PlayerService playerService;
    
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping(path = "/get")
    public List<Player> getPlayers(
        @RequestParam(required = false) String player_name,
        @RequestParam(required = false) String position,
        @RequestParam(required = false) String team
    ) {
        if (team != null && position != null) {
            return playerService.getPlayersByTeamAndPosition(team, position);
        } else if (team != null) {
            return playerService.getPlayersFromTeam(team);
        } else if (player_name != null) {
            return playerService.getPlayersByName(player_name);
        } else if (position != null) {
            return playerService.getPlayersByPosition(position);
        } else {
            return playerService.getPlayers();
        }
    }
}

