import { useState } from 'react';
import { Header } from '@/heroManagement/components/Header';
import { mockUsers } from '@/data/mockUsers';
import type { User } from '@/heroManagement/types/user';

export const HomePage = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);

  return (
    <div className="min-h-screen bg-background">
      <Header />
    </div>
  );
};
