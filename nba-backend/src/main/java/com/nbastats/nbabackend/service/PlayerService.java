package com.nbastats.nbabackend.service;

import java.util.List;

import com.nbastats.nbabackend.entity.Player;

public interface PlayerService {
    public List<Player> getPlayers();
    public List<Player> getPlayersFromTeam(String teamName);
    public List<Player> getPlayersByName(String searchText);
    public List<Player> getPlayersByPosition(String searchText);
    public List<Player> getPlayersByTeamAndPosition(String team, String position);
    
}
