package br.edu.ifrs.canoas.clinicmanager.clinicmanager.controller;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientRegisterDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientResponseDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.ProfessionalDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.ProfessionalResponseDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.service.ProfessionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("professional")
public class ProfessionalController {
    @Autowired
    private ProfessionalService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void register(@RequestBody ProfessionalDTO professionalDto){
        service.registerProfessional(professionalDto);
    }
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Page<ProfessionalResponseDTO>> getListProfessional(@PageableDefault(sort = "name") Pageable pagination) {
        return ResponseEntity.ok(service.getListProfessionals(pagination));
    }
    @GetMapping("getQuantity")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Long> getQuantityProfessionals(){
        return ResponseEntity.ok(service.getQuantityProfessionals());
    }

    @GetMapping("getRanking")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<ProfessionalResponseDTO>> getTop6Professionals(){
        return ResponseEntity.ok(service.getTop6Professional());
    }
}
