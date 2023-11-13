package br.edu.ifrs.canoas.clinicmanager.clinicmanager.controller;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.appointment.AppointmentDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.appointment.AppointmentResponseDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.service.AppointmentService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("appointment")
public class AppointmentController {
    @Autowired
    private AppointmentService service;

    @GetMapping("getQuantity")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Long> getQuantityAppointments(){
        return ResponseEntity.ok(service.getQuantityAppointments());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Transactional
    public void register(@RequestBody AppointmentDTO appointmentDTO) throws Exception {
        service.registerAppointment(appointmentDTO);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Page<AppointmentResponseDTO>> getListAppointments(@PageableDefault() Pageable pagination){
        return ResponseEntity.ok(service.getListAppointments(pagination));
    }
}
