package br.edu.ifrs.canoas.clinicmanager.clinicmanager.repository;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.appointment.Appointment;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.Professional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment,String> {
    List<Appointment> findByAppointmentDateBetween(LocalDate firstDayOfMonth, LocalDate lastDayOfMonth);
}
