import { createContext, ReactNode } from 'react';
import { usePersistedState } from '../utils/usePersistedState';
import { AuthData, useClinicApi } from '../services/api/useClinicApi';
import { USER_KEY } from '../constants/keys';

interface AuthProviderProps {
  children: ReactNode;
}

export type User = {
  id: string;
  role: string;
  token: string;
};

interface AuthContextData {
  user: User | null;
  login: (data: AuthData) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = usePersistedState<User | null>(USER_KEY, null);

  const { auth } = useClinicApi();

  const login = async (data: AuthData) => {
    try {
      const user = await auth(data);
      setUser(user);
    } catch (e) {
      throw e;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
