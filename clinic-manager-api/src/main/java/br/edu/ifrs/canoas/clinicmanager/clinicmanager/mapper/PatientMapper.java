package br.edu.ifrs.canoas.clinicmanager.clinicmanager.mapper;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.address.Address;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.guardian.Guardian;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.Patient;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientResponseDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientRegisterDTO;

import java.time.LocalDate;
import java.time.Period;
import java.util.Optional;
import java.util.stream.Collectors;

public class PatientMapper {
    public static Patient fromDtoToEntity(PatientRegisterDTO patientDto){
        Address address = new Address();
        address.setCity(patientDto.address().city());
        address.setComplement(patientDto.address().complement());
        address.setStreet(patientDto.address().street());
        address.setNeighborhood(patientDto.address().neighborhood());
        address.setNumber(patientDto.address().number());

        Patient patient = new Patient();
        patient.setName(patientDto.name());
        patient.setBirthdate(patientDto.birthdate());
        patient.setAge(Period.between(patientDto.birthdate(), LocalDate.now()).getYears());
        patient.setAddress(address);
        patient.setGuardians(patientDto.listGuardian().stream().map(GuardianMapper::fromDtoToEntity).collect(Collectors.toList()));
        patient.setObservation(patientDto.observation());
        return patient;
    }
    public static PatientResponseDTO fromEntityToDto(Patient patient){
        Optional<Guardian> mainGuardian = patient.getGuardians().stream().filter(Guardian::isMain).findFirst();
        if(mainGuardian.isEmpty()){
            mainGuardian = patient.getGuardians().stream().findFirst();
        }
        return new PatientResponseDTO(patient.getId(), patient.getName(),
                patient.getAge(), GuardianMapper.fromEntityToDto(mainGuardian.get()), patient.getObservation());
    }
}
