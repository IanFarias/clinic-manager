package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient;

public record PatientResponseDTO(String id, String name,
                                 Integer age, String guardian) {
}
