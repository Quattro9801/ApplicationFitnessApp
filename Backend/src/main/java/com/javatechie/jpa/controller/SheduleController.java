package com.javatechie.jpa.controller;

import com.javatechie.jpa.exception.PersonNotdoundExeption;
import com.javatechie.jpa.exception.ResourceNotFoundException;
import com.javatechie.jpa.model.PersonModel;
import com.javatechie.jpa.model.ScheduleModel;
import com.javatechie.jpa.entity.PersonEntity;
import com.javatechie.jpa.entity.SheduleEntity;
import com.javatechie.jpa.repository.PersonRepo;
import com.javatechie.jpa.repository.SheduleRepo;
import org.hibernate.ResourceClosedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class SheduleController {

    @Autowired
    private PersonRepo repository;

    @Autowired
    private SheduleRepo sheduleRepo;


    @GetMapping("/schedule/{status}")
    public List<ScheduleModel> getJoinInformation(@PathVariable("status") String status) {
        return repository.getJoinInformation(status);
    }

   @GetMapping("/person/trainers/{status}")
    public List<PersonModel> getAllTrainers(@PathVariable("status") String status) {
        return repository.getAllTrainers(status);
    }



    @GetMapping("/persons/personId/{id}")
    public List<PersonModel> getUserId(@PathVariable("id") Long id) {

        return repository.getUserId(id);
    }

    @PutMapping("/persons/person/{id}")
    public ResponseEntity<PersonEntity> updateEmployee(@PathVariable(value = "id") Long id,
                                                   @Valid @RequestBody PersonEntity person) throws ResourceNotFoundException {
        PersonEntity persons = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Person not found for this id :: " +id));

            persons.setSurname(person.getSurname());
            persons.setName(person.getName());
            persons.setPatronymic(person.getPatronymic());
            persons.setNumberPhone(person.getNumberPhone());
            persons.setEmail(person.getEmail());
            persons.setBirthDate(person.getBirthDate());
            persons.setGender(person.getGender());
            persons.setStatus(person.getStatus());

        final PersonEntity updatePerson = repository.save(persons);
        return ResponseEntity.ok(updatePerson);
    }
   
}

