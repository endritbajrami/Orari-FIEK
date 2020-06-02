package com.rest.backend.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import com.rest.backend.models.Todo;

import java.time.*;
import java.time.format.DateTimeFormatter;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@CrossOrigin
@RequestMapping("/api/time")
public class TodoController {
    private final List<Todo> list = new ArrayList<>(1);

    DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")
            .withZone(ZoneId.systemDefault());
    String output = DATE_TIME_FORMATTER.format(new Date().toInstant());

    @GetMapping()
    public List<Todo> getAll() {
        list.add(new Todo(output.substring(0, 10)));
        list.remove(1);
        return list;
    }

}