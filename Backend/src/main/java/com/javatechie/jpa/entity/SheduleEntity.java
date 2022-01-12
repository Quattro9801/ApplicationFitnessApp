package com.javatechie.jpa.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.javatechie.jpa.model.PersonModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@NoArgsConstructor
@ToString
@Entity
public class SheduleEntity {
    @Id
    @GeneratedValue
    private long id;
    private String date;
    private String time;
    private String duration;
    private String location;
    private String disciplineName;
    private long hallNumber;


    @ManyToOne(targetEntity = PersonEntity.class,cascade = CascadeType.ALL)
    @JoinColumn(name="personid")
private PersonEntity personEntity;


    public SheduleEntity(String date, String time, String duration, String location, String disciplineName, long hallNumber) {
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.location = location;
        this.disciplineName = disciplineName;
        this.hallNumber = hallNumber;

    }
    public void setPersonEntity(PersonEntity personEntity) {
        this.personEntity = personEntity;
    }
}
