package com.example.backend.config;

import com.example.backend.common.RecipesRepository;
import com.example.backend.common.RolesRepository;
import com.example.backend.common.UserRepository;
import com.example.backend.model.Recipe;
import com.example.backend.model.Roles;
import com.example.backend.model.User;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import javax.management.relation.Role;
import java.io.InputStream;
import java.lang.reflect.Type;
import java.util.List;

@Configuration
public class RunJsonDataLoader implements CommandLineRunner {

    private final Logger logger = org.slf4j.LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final RecipesRepository recipesRepository;
    private final UserRepository userRepository;
    private final RolesRepository rolesRepository;
    private final ObjectMapper objectMapper;

    public RunJsonDataLoader(RecipesRepository recipesRepository, UserRepository userRepository, RolesRepository rolesRepository, ObjectMapper objectMapper) {
        this.recipesRepository = recipesRepository;
        this.userRepository = userRepository;
        this.rolesRepository = rolesRepository;
        this.objectMapper = objectMapper;
    }


    @Override
    public void run(String... args) throws Exception {
        loadRoleData();
        loadUserData();
        loadRecipeData();






    }

    private void loadRoleData() {
        if (rolesRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/roles.json")) {
                List<Roles> roles = objectMapper.readValue(inputStream, new TypeReference<List<Roles>>() {});

//                for (Roles role : roles) {
//                    if (!rolesRepository.existsById(role.getId())) {
//                        rolesRepository.save(role);
//                    }
//                }
                logger.info("Role data loaded from JSON file: {}", roles);
                rolesRepository.saveAll(roles);
            } catch (Exception e) {
                throw new RuntimeException("Failed to load role data from JSON file", e);
            }
        } else {
            logger.info("Role data already loaded");
        }
    }
    private void loadUserData() {
        if (userRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/users.json")) {
                List<User> users = objectMapper.readValue(inputStream, new TypeReference<List<User>>() {
                });
                logger.info("User data loaded from JSON file: {}", users);
                userRepository.saveAll(users);

            } catch (Exception e) {
                throw new RuntimeException("Failed to load recipe data from JSON file", e);
            }
        } else {
            logger.info("User data already loaded");
        }
    }
    private void loadRecipeData() {
        if (recipesRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/recipes.json")) {
                List<Recipe> recipes = objectMapper.readValue(inputStream, new TypeReference<List<Recipe>>() {});
//                for (Recipe recipe : recipes) {
//                    if (!recipesRepository.existsById(recipe.getId())) {
//                        recipesRepository.save(recipe);
//                    }
//                }
                logger.info("Recipe data loaded from JSON file: {}", recipes);
                recipesRepository.saveAll(recipes);
            } catch (Exception e) {
                throw new RuntimeException("Failed to load recipe data from JSON file", e);
            }
        } else {
            logger.info("Recipe data already loaded");
        }
    }








}
