import { mockUsers } from '@/data/mockUsers';
import { getUsersByPageAction } from '@/user_management/actions/get-users-by-page.action';
import { Header } from '@/user_management/components/Header';
import { StatsGridCards } from '@/user_management/components/StatsGridCards';
import { UserCharts } from '@/user_management/components/UserCharts';
import { UserTable } from '@/user_management/components/UserTable';
import type { User } from '@/user_management/types/user';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const HomePage = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);

  useEffect(() => {
    const getUsers = async () => {
      try {
        // setIsLoading(true);
        const users = await getUsersByPageAction();
        console.log(users);
        setUsers(users);
      } catch (error) {
        toast.error((error as Error).message);
      } finally {
        // setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  const handleToggleStatus = (userId: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? { ...user, status: user.status === 'active' ? 'suspended' : 'active' }
          : user
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <StatsGridCards users={users} />

        <UserCharts users={users} />

        <UserTable users={users} onToggleStatus={handleToggleStatus} />
      </main>
    </div>
  );
};
