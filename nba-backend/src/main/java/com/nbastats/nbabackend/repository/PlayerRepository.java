package com.nbastats.nbabackend.repository;

import com.nbastats.nbabackend.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends JpaRepository<Player, String>{

    
}
