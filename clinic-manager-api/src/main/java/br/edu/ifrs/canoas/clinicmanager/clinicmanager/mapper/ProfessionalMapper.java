package br.edu.ifrs.canoas.clinicmanager.clinicmanager.mapper;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.Professional;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.ProfessionalResponseDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.ProfessionalDTO;

public class ProfessionalMapper {
    public static Professional fromDtoToEntity(ProfessionalDTO dto){
        Professional professional = new Professional();
        professional.setCpf(dto.cpf());
        professional.setDiscount(dto.discount());
        professional.setCrm(dto.crm());
        professional.setName(dto.name());
        professional.setSpeciality(dto.speciality());
        professional.setPhone_number(dto.phone_number());
        return professional;
    }

    public static ProfessionalResponseDTO fromEntityToDto(Professional professional){
        return new ProfessionalResponseDTO(professional.getName(), professional.getCpf(), professional.getCrm());
    }
}
