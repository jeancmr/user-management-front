import { IlustrationPanel } from '../components/IlustrationPanel';
import { AuthPanel } from '../components/AuthPanel';
import { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

export const LoginPage = () => {
  const { isAuthenticated } = use(AuthContext);

  if (isAuthenticated) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex bg-background">
      <IlustrationPanel />
      <AuthPanel />
    </div>
  );
};
