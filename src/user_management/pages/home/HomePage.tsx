import { mockUsers } from '@/data/mockUsers';
import { Header } from '@/user_management/components/Header';
import { StatsGridCards } from '@/user_management/components/StatsGridCards';
import { UserCharts } from '@/user_management/components/UserCharts';
import type { User } from '@/user_management/types/user';
import { useState } from 'react';

export const HomePage = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <StatsGridCards users={users} />

        <UserCharts users={users} />
      </main>
    </div>
  );
};
