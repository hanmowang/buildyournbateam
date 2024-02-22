package com.nbastats.nbabackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "player_statistic")
public class Player {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private String id;
    private String player_name;
    private String position;
    private Integer age;
    private String team;
    private Integer games_played;
    private Integer games_started;
    private Double minutes_played;
    private Double field_goal;
    private Double field_goal_attempts;
    private Double field_goal_percentage;
    private Double three_point;
    private Double three_point_attempts;
    private Double three_point_percentage;
    private Double two_point;
    private Double two_point_attempts;
    private Double two_point_percentage;
    private Double effective_field_goal_percentage;
    private Double free_throw;
    private Double free_throw_attempts;
    private Double free_throw_percentage;
    private Double offensive_rebounds;
    private Double defensive_rebounds;
    private Double total_rebounds;
    private Double assists;
    private Double steals;
    private Double blocks;
    private Double personal_fouls;
    private Double points;
    private Double turnovers;
    private Integer year;
}
