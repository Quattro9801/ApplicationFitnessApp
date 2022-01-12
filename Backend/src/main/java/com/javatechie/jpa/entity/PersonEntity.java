package com.javatechie.jpa.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;
@Data
@NoArgsConstructor
@Entity
@ToString
public class PersonEntity {
    @Id
    //@GeneratedValue
    private long id;
    private String surname;
    private String name;
    private String  patronymic;//отчество
    private String numberPhone;
    private String email;
    private String birthDate;
    private String gender;
    private String status;
    @OneToMany(targetEntity = SheduleEntity.class,cascade = CascadeType.ALL)
    @JoinColumn(name ="personid",referencedColumnName = "id")
    private List<SheduleEntity> values;
   public PersonEntity(long id, String surname, String name, String patronymic, String numberPhone, String email, String birthDate, String gender, String status) {
       this.id=id;
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.numberPhone = numberPhone;
        this.email = email;
        this.birthDate = birthDate;
        this.gender = gender;
        this.status = status;
    }
    public PersonEntity(long id)
    {
        this.id=id;
    }
    public PersonEntity(String email)
    {
        this.email=email;
    }


}
