package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.appointment;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.Patient;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.PatientResponseDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.Professional;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.ProfessionalDTO;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record AppointmentDTO(LocalDate appointment_date, String payment_type, LocalDateTime payment_date, String observation, String professionalId, String patientId, String appointmentTypeId) {
}
