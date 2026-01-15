import { IlustrationPanel } from '../components/IlustrationPanel';
import { AuthPanel } from '../components/AuthPanel';
import { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { Spinner } from '@/components/ui/spinner';

export const LoginPage = () => {
  const { isAuthenticated, isLoading } = use(AuthContext);
  const location = useLocation();

  // get URL that non-authenticated user tries to access
  const from = location.state?.from?.pathname + (location.state?.from?.search || '') || '/';

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner className="size-8" />
      </div>
    );
  }

  if (isAuthenticated) return <Navigate to={from} replace />;

  return (
    <div className="min-h-screen flex bg-background">
      <IlustrationPanel />
      <AuthPanel />
    </div>
  );
};
