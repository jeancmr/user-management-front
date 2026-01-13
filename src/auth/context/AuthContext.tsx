import { createContext } from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  onAuth: () => void;
}
export const AuthContext = createContext({} as IAuthContext);
