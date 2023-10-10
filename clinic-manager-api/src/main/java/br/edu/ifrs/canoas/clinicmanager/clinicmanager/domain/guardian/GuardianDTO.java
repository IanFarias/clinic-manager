package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.guardian;

public record GuardianDTO(String name, String cpf, String relationship, boolean isMain, String phoneNumber) {
}
