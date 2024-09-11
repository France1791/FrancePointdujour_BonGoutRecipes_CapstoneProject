package com.example.backend.config;


import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.Statement;
import java.util.logging.Logger;

@Configuration
public class DatabaseCleanUp {

    @Autowired
    private DataSource dataSource;

@Bean
    public DatabaseCleanUp databaseCleanUp(){
        return new DatabaseCleanUp(dataSource);
    }

    public static class DatabaseCleanup {

    private DataSource dataSource;
    private final Logger logger = Logger.getLogger(DatabaseCleanup)
    public DatabaseCleanUp(DataSource dataSource){
        this.dataSource = dataSource;
    }
    @PreDestroy
        public void dropDatabaseTable(){
        try(Connection connection = dataSource.getConnection()){
            Statement statement = connection.createStatement();
            statement.executeUpdate("DROP TABLE IF EXISTS task-manager");
        }
    }
    }
}
