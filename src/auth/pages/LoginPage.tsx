import { IlustrationPanel } from '../components/IlustrationPanel';
import { AuthPanel } from '../components/AuthPanel';
import { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';
import { Spinner } from '@/components/ui/spinner';

export const LoginPage = () => {
  const { isAuthenticated, isLoading } = use(AuthContext);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner className="size-8" />
      </div>
    );
  }

  if (isAuthenticated) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex bg-background">
      <IlustrationPanel />
      <AuthPanel />
    </div>
  );
};
