package br.edu.ifrs.canoas.clinicmanager.clinicmanager.service;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.Patient;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientRegisterDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientResponseDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.Professional;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.ProfessionalDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.ProfessionalResponseDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.mapper.PatientMapper;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.mapper.ProfessionalMapper;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.repository.ProfessionalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessionalService {
    @Autowired
    ProfessionalRepository repository;

    public Optional<Professional> getById(String id){
        return repository.findById(id);
    }

    public void registerProfessional(ProfessionalDTO professionalDTO){
        Professional newProfessional = ProfessionalMapper.fromDtoToEntity(professionalDTO);
        repository.save(newProfessional);
    }
    public Page<ProfessionalResponseDTO> getListProfessionals(Pageable pagination){
        return repository.findAll(pagination).map(ProfessionalMapper::fromEntityToDto);
    }

    public long getQuantityProfessionals(){
        return repository.count();
    }

    public List<ProfessionalResponseDTO> getTop6Professional(){
        return repository.getTop6Professional().stream().map(ProfessionalMapper::fromEntityToDto).toList();
    }
}
