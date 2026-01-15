import { AuthContext } from '@/auth/context/AuthContext';
import { Spinner } from '@/components/ui/spinner';
import { use } from 'react';
import { Navigate, Outlet } from 'react-router';

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = use(AuthContext);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner className="size-8" />
      </div>
    );
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};
