import { PatientDTO } from './dtos';

type PatientForm = {
  name: string;
  birthdate: string;
  street: string;
  number: number;
  city: string;
  neighborhood: string;
  observation: string;
  complement: string;
  guardians: {
    name: string;
    relationship: string;
    cpf: string;
    phoneNumber: string;
    isMain: boolean;
  }[];
};

export const patientMapper = (data: PatientForm): PatientDTO => {
  return {
    name: data.name,
    address: {
      street: data.street,
      number: data.number,
      city: data.city,
      neighborhood: data.neighborhood,
      complement: data.complement,
    },
    observation: data.observation,
    birthdate: data.birthdate,
    listGuardian: data.guardians,
  };
};
