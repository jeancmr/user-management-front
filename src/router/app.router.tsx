import { HomePage } from '@/heroManagement/pages/home/HomePage';
import { createBrowserRouter } from 'react-router';

export const appRouter = createBrowserRouter([
  {
    path: '/login',
    element: <div>LoginPage</div>,
  },
  {
    path: '/',
    element: <HomePage />,
  },
]);
