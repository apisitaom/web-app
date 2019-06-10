package com.example.demo.controller;

import java.util.Collection;
import java.util.stream.Collectors;

import com.example.demo.entity.Position;
import com.example.demo.repository.PositionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PositionController {

    @Autowired
    private PositionRepository positionRepository;

    @GetMapping(path = "/position")
    private Collection<Position> getPosition() {
        return this.positionRepository.findAll().stream().collect(Collectors.toList());
    }

}