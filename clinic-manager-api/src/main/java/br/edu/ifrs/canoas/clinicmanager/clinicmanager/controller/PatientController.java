package br.edu.ifrs.canoas.clinicmanager.clinicmanager.controller;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientResponseDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientRegisterDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.service.PatientService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("patient")
public class PatientController {
    @Autowired
    private PatientService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Transactional
    public void register(@RequestBody PatientRegisterDTO patientDto){
        service.registerPatient(patientDto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Page<PatientResponseDTO>> getListPatients(@PageableDefault(sort = "name")Pageable pagination) {
        return ResponseEntity.ok(service.getListPatients(pagination));
    }
}
