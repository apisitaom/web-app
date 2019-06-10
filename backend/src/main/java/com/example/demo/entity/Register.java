package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
public class Register {

    @Id
    @GeneratedValue
    private @NotNull int idRegister;

    private @NotNull String firstName;
    private @NotNull String lastName;
    private @NotNull String address;
    private @NotNull int phoneNumber;
    private @NotNull int salary;
    private @NotNull String natoinality;

    @ManyToOne
    @JoinColumn(name = "position")
    private Position position;

}