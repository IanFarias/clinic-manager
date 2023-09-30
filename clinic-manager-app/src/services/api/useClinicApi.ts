import { useMemo } from 'react';
import { useHttp } from './base/useHttp';
import { User } from '../../context/AuthContext';

export type AuthData = {
  login: string;
  password: string;
};

interface IRoutes {
  auth: (authData: AuthData) => Promise<User>;
}

export const useClinicApi = () => {
  const httpInstance = useHttp(import.meta.env.VITE_API_URL, {
    'Content-Type': 'application/json',
  });

  async function auth({ login, password }: AuthData) {
    return await httpInstance.post<User>('/auth', {
      login,
      password,
    });
  }

  return useMemo<IRoutes>(
    () =>
      <IRoutes>{
        auth,
      },
    []
  );
};
