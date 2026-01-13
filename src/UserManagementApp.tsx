import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';
import { ThemeProvider } from './context/ThemeContextProvider';
import { AuthProvider } from './auth/context/AuthProvider';

export const UserManagementApp = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </AuthProvider>
  );
};
