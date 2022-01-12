package com.javatechie.jpa.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class PersonModel {
   // private PersonEntity personModel;
    private long id;
    private String surname;
    private String name;
    private String  patronymic;//отчество
    private String numberPhone;
    private String email;
    private String birthDate;
    private String gender;
    private String status;


}
