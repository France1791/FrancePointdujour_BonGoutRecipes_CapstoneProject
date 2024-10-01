package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;



@Entity
@Data
@Table(name = "message")
public class Message {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String message;



}
