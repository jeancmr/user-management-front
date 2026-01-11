import { createBrowserRouter } from 'react-router';
import { HomePage } from '@/user_management/pages/home/HomePage';
import { LoginPage } from '@/auth/pages/LoginPage';

export const appRouter = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
]);
