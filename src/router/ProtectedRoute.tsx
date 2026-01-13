import { Navigate, Outlet } from 'react-router';
import { use } from 'react';
import { AuthContext } from '@/auth/context/AuthContext';

export const ProtectedRoute = () => {
  const { isAuthenticated } = use(AuthContext);

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};
