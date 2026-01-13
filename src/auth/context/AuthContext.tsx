import { createContext } from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
  onAuth: (value: boolean) => void;
}
export const AuthContext = createContext({} as IAuthContext);
