import { AuthContext } from '@/auth/context/AuthContext';
import { use } from 'react';
import { Navigate, Outlet } from 'react-router';

export const ProtectedRoute = () => {
  const { isAuthenticated } = use(AuthContext);

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};
