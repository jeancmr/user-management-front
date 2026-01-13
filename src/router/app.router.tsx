import { createBrowserRouter } from 'react-router';
import { HomePage } from '@/user_management/pages/home/HomePage';
import { LoginPage } from '@/auth/pages/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';

export const appRouter = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <HomePage />,
      },
    ],
  },
]);
