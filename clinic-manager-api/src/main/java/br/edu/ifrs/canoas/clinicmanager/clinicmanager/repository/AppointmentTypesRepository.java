package br.edu.ifrs.canoas.clinicmanager.clinicmanager.repository;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.appointment.AppointmentTypes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentTypesRepository extends JpaRepository<AppointmentTypes,String> {
}
