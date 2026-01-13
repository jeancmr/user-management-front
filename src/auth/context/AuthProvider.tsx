import type { PropsWithChildren } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthContext value={{ isAuthenticated: true, onAuth: () => console.log('auth') }}>
      {children}
    </AuthContext>
  );
};
