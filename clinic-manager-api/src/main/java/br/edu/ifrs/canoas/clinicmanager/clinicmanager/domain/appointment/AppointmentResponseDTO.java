package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.appointment;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.Professional;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.ProfessionalResponseDTO;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record AppointmentResponseDTO(String id, String professionalName, String patientName, String typeName, LocalDate appointmentDate, boolean isPaid) {
}
