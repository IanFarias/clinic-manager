package br.edu.ifrs.canoas.clinicmanager.clinicmanager.repository;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.Professional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProfessionalRepository extends JpaRepository<Professional,String> {
    @Query("select p, (select count(a) from appointments a WHERE a.professional.id = p.id GROUP BY p.id ) as qtd  from professionals p ORDER BY qtd DESC LIMIT 6")
    List<Professional> getTop6Professional();
}
