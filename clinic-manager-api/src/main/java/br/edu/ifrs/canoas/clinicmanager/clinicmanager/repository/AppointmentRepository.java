package br.edu.ifrs.canoas.clinicmanager.clinicmanager.repository;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.appointment.Appointment;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.guardian.Guardian;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment,String> {
}
