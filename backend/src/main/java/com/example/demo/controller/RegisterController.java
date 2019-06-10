package com.example.demo.controller;

import java.util.Collection;
import java.util.stream.Collectors;

import com.example.demo.entity.Position;
import com.example.demo.entity.Register;
import com.example.demo.repository.PositionRepository;
import com.example.demo.repository.RegisterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RegisterController {

    @Autowired
    private RegisterRepository registerRepository;
    @Autowired
    private PositionRepository positionRepository;

    @GetMapping(path = "/register")
    private Collection<Register> getRegister() {
        return this.registerRepository.findAll().stream().collect(Collectors.toList());
    }

    // @GetMapping(value = "/register/{firstName}")
    // public List<Register>findByFirstName(@PathVariable String firstName){

    // List <Register> registers = registerRepository.findByFirstName(firstName);
    // return registers;
    // }

    // @GetMapping("/cool-cars")
    // @CrossOrigin(origins = "http://localhost:4200")
    // public Collection<Car> coolCars() {
    // return repository.findAll().stream()
    // .filter(this::isCool)
    // .collect(Collectors.toList());
    // }

    // @GetMapping(path = "registerss")
    // public Collection<Register>registerss(){
    // return registerRepository.findAll().stream()
    // // .filter()
    // }
    @PostMapping(path = "/register/{firstName}/{lastName}/{address}/{phoneNumber}/{salary}/{natoinality}/{position}")
    public Register register(@PathVariable String firstName, @PathVariable String lastName,
            @PathVariable String address, @PathVariable int phoneNumber, @PathVariable int salary,
            @PathVariable String natoinality, @PathVariable Long position) {

        Register register = new Register();
        register.setFirstName(firstName);
        register.setLastName(lastName);
        register.setAddress(address);
        register.setPhoneNumber(phoneNumber);
        register.setSalary(salary);
        register.setNatoinality(natoinality);

        Position position1 = positionRepository.findById(position).get();
        register.setPosition(position1);

        registerRepository.save(register);
        return register;

    }

    // @DeleteMapping("/registers/{idRegister}")
    // public void deleteRegister(@PathVariable Long idRegister) {
    // registerRepository.deleteById(idRegister);
    // }

    // @DeleteMapping(path = { "/{idRegister}" })
    // public void deleteRegister(@PathVariable Long idRegister) {
    // registerRepository.deleteById(idRegister);
    // }

    @DeleteMapping(path = "/register/{idRegister}")
    public boolean deleteIdRegister(@PathVariable Long idRegister) {
        registerRepository.deleteById(idRegister);
        return true;
    }

    // @DeleteMapping(path = {"/{idRegister}"})
    // public Register delete(@PathVariable("id")Long idRegister){
    // return registerRepository.deleteById(idRegister);
    // }
}