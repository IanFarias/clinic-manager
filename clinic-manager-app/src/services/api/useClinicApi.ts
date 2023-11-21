import { useContext, useMemo } from 'react';
import { useHttp } from './base/useHttp';
import { AuthContext, User } from '../../context/AuthContext';
import {
  Page,
  PatientDTO,
  PatientListDTO,
  ProfessionalDTO,
  ProfessionalListDTO,
} from '../dtos';

export type AuthData = {
  login: string;
  password: string;
};

interface IRoutes {
  auth: (authData: AuthData) => Promise<User>;
  registerPatient: (patient: PatientDTO) => Promise<PatientDTO>;
  registerProfessional: (
    professional: ProfessionalDTO
  ) => Promise<ProfessionalDTO>;
  getPatients: (page?: number, size?: number) => Promise<Page<PatientListDTO>>;
  getProfessionals: (
    page?: number,
    size?: number
  ) => Promise<Page<ProfessionalListDTO>>;
  getTopSixProfessionals: () => Promise<ProfessionalListDTO[]>;
  getNumberOfProfessionals: () => Promise<number>;
  getNumberOfPatients: () => Promise<number>;
  getNumberOfAppointments: () => Promise<number>;
}

export const useClinicApi = () => {
  const { user } = useContext(AuthContext);
  const userToken = user?.token || '';

  const httpInstance = useHttp(import.meta.env.VITE_API_URL, {
    Authorization: userToken,
    'Content-Type': 'application/json',
  });

  async function auth({ login, password }: AuthData) {
    return await httpInstance.post<User>('/auth', {
      login,
      password,
    });
  }

  async function registerPatient(patient: PatientDTO) {
    return await httpInstance.post<PatientDTO>('/patient', patient);
  }

  async function registerProfessional(professional: ProfessionalDTO) {
    return await httpInstance.post<ProfessionalDTO>(
      '/professional',
      professional
    );
  }

  async function getPatients(page: number = 0, size: number = 10) {
    return await httpInstance.get<Page<PatientListDTO>>(
      `/patient?page=${page}&size=${size}`
    );
  }

  async function getProfessionals(page: number = 0, size: number = 10) {
    return await httpInstance.get<Page<ProfessionalListDTO>>(
      `/professional?page=${page}&size=${size}`
    );
  }

  async function getTopSixProfessionals() {
    return await httpInstance.get<ProfessionalListDTO[]>(
      '/professional/getRanking'
    );
  }

  async function getNumberOfProfessionals() {
    return await httpInstance.get<number>('/professional/getQuantity');
  }

  async function getNumberOfPatients() {
    return await httpInstance.get<number>('/patient/getQuantity');
  }

  async function getNumberOfAppointments() {
    return await httpInstance.get<number>('/appointment/getQuantity');
  }

  return useMemo<IRoutes>(
    () =>
      <IRoutes>{
        auth,
        registerPatient,
        registerProfessional,
        getPatients,
        getProfessionals,
        getTopSixProfessionals,
        getNumberOfProfessionals,
        getNumberOfPatients,
        getNumberOfAppointments,
      },
    []
  );
};
