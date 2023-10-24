package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional;

public record ProfessionalDTO(String name, String cpf, String crm, Specialty specialty, String phone_number, double discount) {
}
