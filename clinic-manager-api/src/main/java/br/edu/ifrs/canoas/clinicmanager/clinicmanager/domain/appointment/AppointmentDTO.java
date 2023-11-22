package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.appointment;


import java.time.LocalDate;
import java.time.LocalDateTime;

public record AppointmentDTO(LocalDate appointment_date, String payment_type, LocalDateTime payment_date, String observation, String professionalId, String patientId, String appointmentTypeId) {
}
