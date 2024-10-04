package com.example.backend.controller;

import com.example.backend.common.CollectionRepository;
import com.example.backend.common.UserRepository;
import com.example.backend.model.Collection;
import com.example.backend.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CollectionController {

    private final CollectionRepository collectionRepository;
    private final UserRepository userRepository;

    public CollectionController(CollectionRepository collectionRepository, UserRepository userRepository) {
        this.collectionRepository = collectionRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/collections")
    public ResponseEntity<List<Collection>> getCollections() {
        List<Collection> collections = collectionRepository.findAll();
        return ResponseEntity.ok(collections);
    }

    @GetMapping("/collections/{creatorId}")
    public ResponseEntity<List<Collection>> getCollectionsByCreator(@PathVariable int creatorId) {
        User creator = userRepository.findById(creatorId).orElse(null);
        if (creator == null) {
            return ResponseEntity.badRequest().body(null);
        }
        List<Collection> collections = collectionRepository.findByCreator(creator);
        return ResponseEntity.ok(collections);
    }

    @PostMapping("/createcollection")
    public ResponseEntity<Collection> createCollection(@RequestBody Collection collection, @RequestParam int creatorId) {
        User creator = userRepository.findById((int) creatorId).orElse(null);
        if (creator == null) {
            return ResponseEntity.badRequest().body(null);
        }
        collection.setCreator(creator);
        Collection savedCollection = collectionRepository.save(collection);
        return ResponseEntity.status(201).body(savedCollection);
    }

    @PutMapping("/updatecollection/{id}")
    public ResponseEntity<Collection> updateCollection(@PathVariable Long id, @RequestBody Collection updatedCollection) {
        return collectionRepository.findById(id)
                .map(collection -> {
                    collection.setName(updatedCollection.getName());
                    collection.setDescription(updatedCollection.getDescription());
                    collection.setType(updatedCollection.getType());
                    collection.setImgUrl(updatedCollection.getImgUrl());
                    collection.setDifficultyLevel(updatedCollection.getDifficultyLevel());
                    collection.setCookingTime(updatedCollection.getCookingTime());
                    collection.setIngredients(updatedCollection.getIngredients());
                    collection.setInstructions(updatedCollection.getInstructions());
                    collection.setNutrition(updatedCollection.getNutrition());
                    Collection savedCollection = collectionRepository.save(collection);
                    return ResponseEntity.ok(savedCollection);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/deletecollection/{id}")
    public ResponseEntity<?> deleteCollection(@PathVariable Long id) {
        return collectionRepository.findById(id)
                .map(collection -> {
                    collectionRepository.delete(collection);
                    return ResponseEntity.ok().build();
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
