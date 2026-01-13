import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';
import { ThemeProvider } from './context/ThemeContextProvider';
import { AuthProvider } from './auth/context/AuthProvider';
import { Toaster } from 'sonner';

export const UserManagementApp = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Toaster richColors />
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </AuthProvider>
  );
};
