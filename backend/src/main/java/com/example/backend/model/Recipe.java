package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table(name = "recipe")
public class Recipe {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String image_url;
    private String name;
    private String description;
    private String difficultyLevel; // easy, medium, hard
    private String category;


    @ElementCollection
    private List<String> ingredients;

    @Lob
    private String steps;

    @OneToMany(mappedBy = "recipe")
    private List<Review> reviews;
}
