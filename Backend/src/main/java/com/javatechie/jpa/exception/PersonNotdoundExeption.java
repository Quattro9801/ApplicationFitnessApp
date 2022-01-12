package com.javatechie.jpa.exception;

public class PersonNotdoundExeption extends RuntimeException{
    public PersonNotdoundExeption(Long id) {
        super(
                "Person not found: "+id
        );
    }
}
