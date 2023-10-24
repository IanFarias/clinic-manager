package br.edu.ifrs.canoas.clinicmanager.clinicmanager.repository;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.Professional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessionalRepository extends JpaRepository<Professional,String> {
}
