package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.user;

public record LoginResponseDTO(String id, UserRole role, String token) {
}
