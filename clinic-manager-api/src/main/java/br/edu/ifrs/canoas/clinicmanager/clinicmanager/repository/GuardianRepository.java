package br.edu.ifrs.canoas.clinicmanager.clinicmanager.repository;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.guardian.Guardian;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuardianRepository extends JpaRepository<Guardian,String> {
}
