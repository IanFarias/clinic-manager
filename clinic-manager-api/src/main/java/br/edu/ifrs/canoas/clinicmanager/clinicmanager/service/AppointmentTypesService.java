package br.edu.ifrs.canoas.clinicmanager.clinicmanager.service;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.appointment.AppointmentTypes;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.repository.AppointmentTypesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AppointmentTypesService {
    @Autowired
    AppointmentTypesRepository repository;

    public Optional<AppointmentTypes> getById(String id){
        return repository.findById(id);
    }
}
