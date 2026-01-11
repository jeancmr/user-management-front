import type { User } from '../types/user';

export function getPlanDistribution(users: User[]) {
  const counts = users.reduce(
    (acc, user) => {
      acc[user.plan]++;
      return acc;
    },
    { pro: 0, free: 0 }
  );

  return [
    { name: 'Pro', value: counts.pro, fill: '#3b82f6' },
    { name: 'Free', value: counts.free, fill: '#27272a' },
  ];
}
