import { useEffect, useState, type PropsWithChildren } from 'react';
import { AuthContext } from './AuthContext';
import { verifyAction } from '../actions/verify.action';
import { logoutAction } from '../actions/logout.action';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');
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
        const result = await verifyAction();
        setUser(result);
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
    <AuthContext
      value={{
        isAuthenticated,
        isLoading,
        user,
        logout,
        onAuth: handleAuth,
      }}
    >
      {children}
    </AuthContext>
  );
};
