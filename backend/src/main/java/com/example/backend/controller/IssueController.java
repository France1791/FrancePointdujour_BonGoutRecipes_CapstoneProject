package com.example.backend.controller;

import com.example.backend.common.IssueRepository;
import com.example.backend.model.Issue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/issues")
public class IssueController {

    @Autowired
    private IssueRepository issueRepository;

    @GetMapping
    public List<Issue> getAllIssues() {
        return issueRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Issue> getIssueById(@PathVariable Long id) {
        Optional<Issue> issue = issueRepository.findById(id);
        return issue.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Issue createIssue(@RequestBody Issue issue) {
        issue.setCreatedAt(new Date());
        issue.setStatus("Open");
        return issueRepository.save(issue);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Issue> updateIssue(@PathVariable Long id, @RequestBody Issue issueDetails) {
        Optional<Issue> optionalIssue = issueRepository.findById(id);
        if (optionalIssue.isPresent()) {
            Issue issue = optionalIssue.get();
            issue.setTitle(issueDetails.getTitle());
            issue.setDescription(issueDetails.getDescription());
            issue.setStatus(issueDetails.getStatus());
            return ResponseEntity.ok(issueRepository.save(issue));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIssue(@PathVariable Long id) {
        Optional<Issue> optionalIssue = issueRepository.findById(id);
        if (optionalIssue.isPresent()) {
            issueRepository.delete(optionalIssue.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}