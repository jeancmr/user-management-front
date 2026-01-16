import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { getSummaryAnalyticsAction } from '@/user_management/actions/get-summary-analytics.action';
import { getUsersByPageAction } from '@/user_management/actions/get-users-by-page.action';
import { Header } from '@/user_management/components/Header';
import { StatsGridCards } from '@/user_management/components/StatsGridCards';
import { UserCharts } from '@/user_management/components/UserCharts';
import { UserTable } from '@/user_management/components/UserTable';
import { useValidateParams } from '@/user_management/hooks/useValidateParams';
import type { User } from '@/user_management/types/user';
import type { Analytics, Summary } from '@/user_management/types/get-summary-analytics-response';

export const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [summary, setSummary] = useState<Summary>({
    totalUsers: 0,
    active: 0,
    suspended: 0,
    pro: 0,
  });

  const [analytics, setAnalytics] = useState<Analytics>({
    userGrowth: [],
    planDistribution: [],
    weeklyActivity: [],
  });

  const [totalPages, setTotalPages] = useState(0);
  const { limit, page } = useValidateParams();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { usersWithDatesFormated: users, totalPages } = await getUsersByPageAction(
          page,
          limit
        );
        setUsers(users);
        setTotalPages(totalPages);
      } catch (error) {
        toast.error((error as Error).message);
      }
    };

    getUsers();
  }, [page, limit]);

  useEffect(() => {
    const getSummaryAnalytics = async () => {
      const { summary: summaryRes, analytics: analyticsRes } = await getSummaryAnalyticsAction();
      setSummary(summaryRes);
      setAnalytics(analyticsRes);
    };

    getSummaryAnalytics();
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
        <StatsGridCards summary={summary} />

        <UserCharts analytics={analytics} />

        <UserTable users={users} onToggleStatus={handleToggleStatus} totalPages={totalPages} />
      </main>
    </div>
  );
};
