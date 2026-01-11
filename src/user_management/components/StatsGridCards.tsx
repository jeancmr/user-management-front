import { Users, UserCheck, UserX, Crown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { User } from '../types/user';

interface Props {
  users: User[];
}

export const StatsGridCards = ({ users }: Props) => {
  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === 'active').length;
  const suspendedUsers = users.filter((u) => u.status === 'suspended').length;
  const proUsers = users.filter((u) => u.plan === 'pro').length;

  const stats = [
    {
      label: 'Total Users',
      value: totalUsers.toLocaleString(),
      icon: Users,
      color: 'text-chart-1',
      bgColor: 'bg-chart-1/10',
    },
    {
      label: 'Active',
      value: activeUsers.toLocaleString(),
      icon: UserCheck,
      color: 'text-chart-2',
      bgColor: 'bg-chart-2/10',
    },
    {
      label: 'Suspended',
      value: suspendedUsers.toLocaleString(),
      icon: UserX,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
    },
    {
      label: 'Pro Users',
      value: proUsers.toLocaleString(),
      icon: Crown,
      color: 'text-chart-3',
      bgColor: 'bg-chart-3/10',
    },
  ];

  return (
    <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="bg-card     border-border">
          <CardContent className="flex items-center gap-4 p-4">
            <div className={`rounded-lg p-2.5 ${stat.bgColor}`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
