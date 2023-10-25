import { useContext, useMemo } from 'react';
import { useHttp } from './base/useHttp';
import { AuthContext, User } from '../../context/AuthContext';
import { PatientDTO, ProfessionalDTO } from '../dtos';

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

  return useMemo<IRoutes>(
    () =>
      <IRoutes>{
        auth,
        registerPatient,
        registerProfessional,
      },
    []
  );
};
