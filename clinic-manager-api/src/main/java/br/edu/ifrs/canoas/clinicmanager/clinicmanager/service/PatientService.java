package br.edu.ifrs.canoas.clinicmanager.clinicmanager.service;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.Patient;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientResponseDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientRegisterDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.mapper.PatientMapper;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class    PatientService {
    @Autowired
    PatientRepository repository;

    public Optional<Patient> getById(String id){
        return repository.findById(id);
    }

    public void registerPatient(PatientRegisterDTO patientDto){
        Patient newPatient = PatientMapper.fromDtoToEntity(patientDto);
        repository.save(newPatient);
    }

    public Page<PatientResponseDTO> getListPatients(Pageable pagination){
        return repository.findAll(pagination).map(PatientMapper::fromEntityToDto);
    }

    public long getQuantityPatients(){
        return repository.count();
    }
}
