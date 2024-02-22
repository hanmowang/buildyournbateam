package com.nbastats.nbabackend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbastats.nbabackend.entity.Player;
import com.nbastats.nbabackend.repository.PlayerRepository;


@Service
public class PlayerServiceImpl implements PlayerService{
    @Autowired
    private PlayerRepository playerRepository;
    

    public PlayerServiceImpl(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @Override
    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

    @Override
    public List<Player> getPlayersFromTeam(String teamName) {
        return playerRepository.findAll().stream()
        .filter(player -> teamName.equals(player.getTeam()))
        .collect(Collectors.toList());
    }

    @Override
    public List<Player> getPlayersByName(String searchText) {
        return playerRepository.findAll().stream()
        .filter(player -> player.getPlayer_name().toLowerCase().contains(searchText.toLowerCase()))
        .collect(Collectors.toList());
    }

    @Override
    public List<Player> getPlayersByPosition(String searchText) {
        return playerRepository.findAll().stream()
        .filter(player -> player.getPosition().toLowerCase().contains(searchText.toLowerCase()))
        .collect(Collectors.toList());
    }
    
    @Override
    public List<Player> getPlayersByTeamAndPosition(String team, String position) {
        return playerRepository.findAll().stream()
        .filter(player -> team.equals(player.getTeam()) && position.equals(player.getPosition()))
        .collect(Collectors.toList());
    }
}
