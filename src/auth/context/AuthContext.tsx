import { createContext } from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: string;
  logout: () => void;
  onAuth: (value: boolean) => void;
}
export const AuthContext = createContext({} as IAuthContext);
