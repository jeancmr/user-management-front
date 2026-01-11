import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';
import { ThemeProvider } from './context/ThemeContextProvider';

export const UserManagementApp = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={appRouter} />;
    </ThemeProvider>
  );
};
