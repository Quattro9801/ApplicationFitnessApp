package com.javatechie.jpa.repository;

import com.javatechie.jpa.model.PersonModel;
import com.javatechie.jpa.model.ScheduleModel;
import com.javatechie.jpa.entity.PersonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface PersonRepo extends JpaRepository<PersonEntity,Long> {


    @Query("SELECT new com.javatechie.jpa.model.ScheduleModel(s.id,p.surname,p.name,p.patronymic,s.date,s.time,s.duration,s.disciplineName,s.location,s.hallNumber) FROM PersonEntity p JOIN p.values s where p.status=:status")// вывод всех записей расписания

    public List<ScheduleModel> getJoinInformation(@Param("status") String status ); // выод расписания


@Query("SELECT new com.javatechie.jpa.model.PersonModel(p.id,p.surname,p.name,p.patronymic,p.numberPhone,p.email,p.birthDate,p.gender,p.status)FROM PersonEntity p where p.id=:id")

    public List<PersonModel> getUserId(@Param("id") Long id);//вывод из таблицы person по id


    @Query("SELECT new com.javatechie.jpa.model.PersonModel(p.id,p.surname,p.name,p.patronymic,p.numberPhone,p.email,p.birthDate,p.gender,p.status)FROM PersonEntity p where p.status=:status")

    public List<PersonModel> getAllTrainers(@Param("status") String status);//вывод из таблицы тренеров




}
