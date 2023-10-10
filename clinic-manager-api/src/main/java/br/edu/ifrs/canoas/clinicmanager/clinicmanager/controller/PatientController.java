package br.edu.ifrs.canoas.clinicmanager.clinicmanager.controller;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientRegisterDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.service.PatientService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("patient")
public class PatientController {
    @Autowired
    private PatientService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void register(@RequestBody PatientRegisterDTO patientDto){
        service.registerPatient(patientDto);
    }
}
