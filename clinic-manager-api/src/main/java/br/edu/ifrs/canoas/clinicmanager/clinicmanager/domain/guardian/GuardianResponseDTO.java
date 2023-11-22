package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.guardian;

public record GuardianResponseDTO(String id, String name, String cpf, String relationship, boolean isMain, String phoneNumber) {
}
