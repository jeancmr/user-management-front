import { useEffect, useState, type PropsWithChildren } from 'react';
import { AuthContext } from './AuthContext';
import { verifyAction } from '../actions/verify.action';
import { logoutAction } from '../actions/logout.action';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleAuth = (value: boolean) => {
    setIsAuthenticated(value);
  };

  const logout = async () => {
    const result = await logoutAction();
    console.log(result);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await verifyAction();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext value={{ isAuthenticated, onAuth: handleAuth, isLoading, logout }}>
      {children}
    </AuthContext>
  );
};
