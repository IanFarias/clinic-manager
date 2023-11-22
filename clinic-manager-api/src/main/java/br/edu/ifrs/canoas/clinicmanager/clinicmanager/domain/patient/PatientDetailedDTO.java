package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.address.AddressDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.guardian.GuardianResponseDTO;

import java.time.LocalDate;
import java.util.List;

public record PatientDetailedDTO(String id, String name, LocalDate birthdate,
                                 AddressDTO address, List<GuardianResponseDTO> listGuardian, String observation) {
}
