package com.nbastats.nbabackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;



@Entity
@Table(name = "player_statistic")
public class Player {
    @Id
    @SequenceGenerator(
        name = "player_sequence",
        sequenceName = "player_sequence",
        allocationSize = 1
    )

    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "player_sequence"
    )
    private String name;
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
    private Double effective_fg_percentage;
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
    private Integer year;

    public Player(String name, String position, int age, String team, int games_played, int games_started, double minutes_played, double field_goal, double field_goal_attempts, double field_goal_percentage, double three_point, double three_point_attempts, double three_point_percentage, double two_point, double two_point_attempts, double two_point_percentage, double effective_fg_percentage, double free_throw, double free_throw_attempts, double free_throw_percentage, double offensive_rebounds, double defensive_rebounds, double total_rebounds, double assists, double steals, double blocks, double personal_fouls, double points, int year) {
        this.name = name;
        this.position = position;
        this.age = age;
        this.team = team;
        this.games_played = games_played;
        this.games_started = games_started;
        this.minutes_played = minutes_played;
        this.field_goal = field_goal;
        this.field_goal_attempts = field_goal_attempts;
        this.field_goal_percentage = field_goal_percentage;
        this.three_point = three_point;
        this.three_point_attempts = three_point_attempts;
        this.three_point_percentage = three_point_percentage;
        this.two_point = two_point;
        this.two_point_attempts = two_point_attempts;
        this.two_point_percentage = two_point_percentage;
        this.free_throw = free_throw;
        this.free_throw_attempts = free_throw_attempts;
        this.free_throw_percentage = free_throw_percentage;
        this.effective_fg_percentage = effective_fg_percentage;
        this.offensive_rebounds = offensive_rebounds;
        this.defensive_rebounds = defensive_rebounds;
        this.total_rebounds = total_rebounds;
        this.assists = assists;
        this.steals = steals;
        this.blocks = blocks;
        this.points = points;
        this.year = year;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPosition() {
        return this.position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Integer getAge() {
        return this.age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getTeam() {
        return this.team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public Integer getGames_played() {
        return this.games_played;
    }

    public void setGames_played(Integer games_played) {
        this.games_played = games_played;
    }

    public Integer getGames_started() {
        return this.games_started;
    }

    public void setGames_started(Integer games_started) {
        this.games_started = games_started;
    }

    public Double getMinutes_played() {
        return this.minutes_played;
    }

    public void setMinutes_played(Double minutes_played) {
        this.minutes_played = minutes_played;
    }

    public Double getField_goal() {
        return this.field_goal;
    }

    public void setField_goal(Double field_goal) {
        this.field_goal = field_goal;
    }

    public Double getField_goal_attempts() {
        return this.field_goal_attempts;
    }

    public void setField_goal_attempts(Double field_goal_attempts) {
        this.field_goal_attempts = field_goal_attempts;
    }

    public Double getField_goal_percentage() {
        return this.field_goal_percentage;
    }

    public void setField_goal_percentage(Double field_goal_percentage) {
        this.field_goal_percentage = field_goal_percentage;
    }

    public Double getThree_point() {
        return this.three_point;
    }

    public void setThree_point(Double three_point) {
        this.three_point = three_point;
    }

    public Double getThree_point_attempts() {
        return this.three_point_attempts;
    }

    public void setThree_point_attempts(Double three_point_attempts) {
        this.three_point_attempts = three_point_attempts;
    }

    public Double getThree_point_percentage() {
        return this.three_point_percentage;
    }

    public void setThree_point_percentage(Double three_point_percentage) {
        this.three_point_percentage = three_point_percentage;
    }

    public Double getTwo_point() {
        return this.two_point;
    }

    public void setTwo_point(Double two_point) {
        this.two_point = two_point;
    }

    public Double getTwo_point_attempts() {
        return this.two_point_attempts;
    }

    public void setTwo_point_attempts(Double two_point_attempts) {
        this.two_point_attempts = two_point_attempts;
    }

    public Double getTwo_point_percentage() {
        return this.two_point_percentage;
    }

    public void setTwo_point_percentage(Double two_point_percentage) {
        this.two_point_percentage = two_point_percentage;
    }

    public Double getEffective_fg_percentage() {
        return this.effective_fg_percentage;
    }

    public void setEffective_fg_percentage(Double effective_fg_percentage) {
        this.effective_fg_percentage = effective_fg_percentage;
    }

    public Double getFree_throw() {
        return this.free_throw;
    }

    public void setFree_throw(Double free_throw) {
        this.free_throw = free_throw;
    }

    public Double getFree_throw_attempts() {
        return this.free_throw_attempts;
    }

    public void setFree_throw_attempts(Double free_throw_attempts) {
        this.free_throw_attempts = free_throw_attempts;
    }

    public Double getFree_throw_percentage() {
        return this.free_throw_percentage;
    }

    public void setFree_throw_percentage(Double free_throw_percentage) {
        this.free_throw_percentage = free_throw_percentage;
    }

    public Double getOffensive_rebounds() {
        return this.offensive_rebounds;
    }

    public void setOffensive_rebounds(Double offensive_rebounds) {
        this.offensive_rebounds = offensive_rebounds;
    }

    public Double getDefensive_rebounds() {
        return this.defensive_rebounds;
    }

    public void setDefensive_rebounds(Double defensive_rebounds) {
        this.defensive_rebounds = defensive_rebounds;
    }

    public Double getTotal_rebounds() {
        return this.total_rebounds;
    }

    public void setTotal_rebounds(Double total_rebounds) {
        this.total_rebounds = total_rebounds;
    }

    public Double getAssists() {
        return this.assists;
    }

    public void setAssists(Double assists) {
        this.assists = assists;
    }

    public Double getSteals() {
        return this.steals;
    }

    public void setSteals(Double steals) {
        this.steals = steals;
    }

    public Double getBlocks() {
        return this.blocks;
    }

    public void setBlocks(Double blocks) {
        this.blocks = blocks;
    }

    public Double getPersonal_fouls() {
        return this.personal_fouls;
    }

    public void setPersonal_fouls(Double personal_fouls) {
        this.personal_fouls = personal_fouls;
    }

    public Double getPoints() {
        return this.points;
    }

    public void setPoints(Double points) {
        this.points = points;
    }

    public Integer getYear() {
        return this.year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    
}
