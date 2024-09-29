package com.example.backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table(name = "recipe")

public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private String type;// vegan,regular,nuts-free
    private String imgUrl;
    private String difficultyLevel;
   private String cookingTime;
    @Column(length = 2000) // Increase the length as needed
    private String ingredients;

    @Column(length = 2000) // Increase the length as needed
    private String instructions;

    @Column(length = 2000) // Increase the length as needed
    private String nutrition;

    @ManyToOne
    @JoinColumn(name = "creator_id", nullable = false)
    private User creator;
}
