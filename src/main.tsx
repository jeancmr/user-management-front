import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UserManagementApp } from './UserManagementApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserManagementApp />
  </StrictMode>
);
