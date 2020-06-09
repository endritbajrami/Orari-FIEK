package com.rest.backend.models;

public class Todo {
    private String date;

    public Todo(String date) {

        this.date = date;
    }

    public String getdate() {
        return date;
    }

    public void setdate(String date) {
        this.date = date;
    }
}