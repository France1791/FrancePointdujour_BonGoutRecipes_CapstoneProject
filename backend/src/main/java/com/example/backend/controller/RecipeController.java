package com.example.backend.controller;

import com.example.backend.common.RecipesRepository;
import com.example.backend.common.UserRepository;
import com.example.backend.model.Recipe;
import com.example.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    @Autowired
    private RecipesRepository recipesRepository;

    @Autowired
    private UserRepository userRepository;

    // 1. See all recipes
    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipesRepository.findAll();
    }

    // 2. See recipes by keywords
    @GetMapping("/search")
    public ResponseEntity<List<Recipe>> searchRecipes(@RequestParam String query) {
        List<Recipe> recipes = recipesRepository.findByName(query);
        return ResponseEntity.ok(recipes);
    }

    // 3. See recipes by type
    @GetMapping("/type/{type}")
    public List<Recipe> getRecipesByType(@PathVariable String type) {
        return recipesRepository.findByType(type);
    }

    // 4. Add a new recipe
    @PostMapping
    public Recipe addRecipe(@RequestBody Recipe recipe) {
        return recipesRepository.save(recipe);
    }

    // 5. Update a recipe
   @PutMapping("/{id}")
   public ResponseEntity<Recipe> updateRecipe(@PathVariable Integer id, @RequestBody Recipe recipe) {
     Recipe existingRecipe = recipesRepository.findById(id).orElse(null);
       if (existingRecipe == null) {
            return ResponseEntity.notFound().build();
       }
       existingRecipe.setName(recipe.getName());
       existingRecipe.setDescription(recipe.getDescription());
       existingRecipe.setType(recipe.getType());
        existingRecipe.setIngredients(recipe.getIngredients());
        existingRecipe.setInstructions(recipe.getInstructions());
       return ResponseEntity.ok(recipesRepository.save(existingRecipe));
    }

    // 6. Delete a recipe
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Integer id) {
        Recipe existingRecipe = recipesRepository.findById(id).orElse(null);
        if (existingRecipe == null) {
            return ResponseEntity.notFound().build();
        }
        recipesRepository.delete(existingRecipe);
        return ResponseEntity.noContent().build();
    }

    //7. get recipe by id
    @GetMapping("/{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable Integer id) {
        Optional<Recipe> recipe = recipesRepository.findById(id);
        return recipe.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}

