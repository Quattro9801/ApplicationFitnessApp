package com.javatechie.jpa.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class ScheduleModel {
    private long id;
    private String surname;
    private String name;
    private String patronymic;
    private String date;
    private String time;
    private String duration;
    private String disciplineName;
    private String location;
    private long hallNumber;
    public ScheduleModel(long id,String surname,String name, String patronymic,  String date, String time, String duration,  String disciplineName,String location, long hallNumber) {
       this.id=id;
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.disciplineName = disciplineName;
        this.location = location;
        this.hallNumber = hallNumber;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getPatronymic() {
        return patronymic;
    }

    public String getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }

    public String getDuration() {
        return duration;
    }

    public String getLocation() {
        return location;
    }

    public String getDisciplineName() {
        return disciplineName;
    }


    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setDisciplineName(String disciplineName) {
        this.disciplineName = disciplineName;
    }

    public void setHallNumber(long hallNumber) {
        this.hallNumber = hallNumber;
    }

    public ScheduleModel() {
    }
}
