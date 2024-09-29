package com.example.backend.common;

import com.example.backend.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipesRepository extends JpaRepository<Recipe, Integer> {

    List<Recipe> findByType(String Type);

    List<Recipe> findByName(String name);

}
