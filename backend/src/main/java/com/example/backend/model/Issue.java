package com.example.backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table(name = "issue")
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 500) // Increase the length as needed
    private String description;

    private String status;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at" , nullable = false)
    private Date createdAt;


}