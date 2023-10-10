package br.edu.ifrs.canoas.clinicmanager.clinicmanager.service;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.Patient;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientRegisterDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.mapper.PatientMapper;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {
    @Autowired
    PatientRepository repository;

    public void registerPatient(PatientRegisterDTO patientDto){
        Patient newPatient = PatientMapper.fromDtoToEntity(patientDto);
        repository.save(newPatient);
    }
}
