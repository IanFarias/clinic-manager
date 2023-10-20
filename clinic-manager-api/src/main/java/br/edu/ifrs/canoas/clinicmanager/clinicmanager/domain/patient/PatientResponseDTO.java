package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.guardian.GuardianResponseDTO;

public record PatientResponseDTO(String id, String name,
                                 Integer age, GuardianResponseDTO guardian, String observation) {
}
