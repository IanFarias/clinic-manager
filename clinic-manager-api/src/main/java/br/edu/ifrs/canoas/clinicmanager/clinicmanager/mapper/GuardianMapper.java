package br.edu.ifrs.canoas.clinicmanager.clinicmanager.mapper;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.guardian.Guardian;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.guardian.GuardianDTO;

public class GuardianMapper {
    public static Guardian fromDtoToEntity(GuardianDTO guardianDto){
        Guardian guardian = new Guardian();
        guardian.setCpf(guardianDto.cpf());
        guardian.setName(guardianDto.name());
        guardian.setRelationship(guardianDto.relationship());
        guardian.setMain(guardianDto.isMain());
        guardian.setPhoneNumber(guardianDto.phoneNumber());
        return guardian;
    }
}
