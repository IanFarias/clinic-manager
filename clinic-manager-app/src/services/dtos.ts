import { Guardian } from '../pages/RegisterPatient';

export type PatientDTO = {
  name: string;
  address: {
    street: string;
    number: number;
    city: string;
    neighborhood: string;
    complement: string;
  };
  observation: string;
  birthdate: string;
  listGuardian: Guardian[];
};

export type ProfessionalDTO = {
  name: string;
  cpf: string;
  crm: string;
  phone_number: string;
  speciality: string;
  discount: number;
};
