package br.edu.ifrs.canoas.clinicmanager.clinicmanager.repository;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient,String> {
}
