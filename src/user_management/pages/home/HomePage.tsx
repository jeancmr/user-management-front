import { mockUsers } from '@/data/mockUsers';
import { getUsersByPageAction } from '@/user_management/actions/get-users-by-page.action';
import { Header } from '@/user_management/components/Header';
import { StatsGridCards } from '@/user_management/components/StatsGridCards';
import { UserCharts } from '@/user_management/components/UserCharts';
import { UserTable } from '@/user_management/components/UserTable';
import type { User } from '@/user_management/types/user';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { toast } from 'sonner';

export const HomePage = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchParams] = useSearchParams();

  const queryPage = searchParams.get('page') ?? '1';
  const page = isNaN(+queryPage) ? 1 : +queryPage;

  const queryLimit = searchParams.get('limit') ?? '6';
  const limit = isNaN(+queryLimit) ? 6 : +queryLimit;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await getUsersByPageAction(page, limit);
        setUsers(users);
      } catch (error) {
        toast.error((error as Error).message);
      }
    };

    getUsers();
  }, [page, limit]);

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
