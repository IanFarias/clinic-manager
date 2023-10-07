package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.user;

public record LoginResponseDTO(String id, String user, UserRole role, String token) {
}
