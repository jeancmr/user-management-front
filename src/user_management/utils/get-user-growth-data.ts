import type { User } from '../types/user';

const MONTH_ORDER = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatMonth(date: Date) {
  return date.toLocaleString('en-US', { month: 'short' });
}

export function getUserGrowthData(users: User[]) {
  const map = new Map<string, { users: number; proUsers: number }>();

  users.forEach((user) => {
    const month = formatMonth(user.createdAt);

    if (!map.has(month)) {
      map.set(month, { users: 0, proUsers: 0 });
    }

    const entry = map.get(month)!;
    entry.users++;
    if (user.plan === 'pro') entry.proUsers++;
  });

  const result = Array.from(map.entries()).map(([month, data]) => ({
    month,
    users: data.users,
    proUsers: data.proUsers,
  }));

  return result.sort((a, b) => MONTH_ORDER.indexOf(a.month) - MONTH_ORDER.indexOf(b.month));
}
