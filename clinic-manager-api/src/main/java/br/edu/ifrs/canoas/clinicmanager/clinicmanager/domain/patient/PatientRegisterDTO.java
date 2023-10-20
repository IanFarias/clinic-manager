package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.address.AddressDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.guardian.Guardian;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.guardian.GuardianDTO;

import java.time.LocalDate;
import java.util.List;

public record PatientRegisterDTO(String name, LocalDate birthdate,
                                 AddressDTO address, List<GuardianDTO> listGuardian, String observation) {
}
