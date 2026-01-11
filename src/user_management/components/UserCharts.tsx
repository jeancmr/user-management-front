import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Cell,
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  BarChart,
  Bar,
} from 'recharts';
import { getPlanDistribution } from '../utils/get-plan-distribution-data';
import { getUserGrowthData } from '../utils/get-user-growth-data';
import type { User } from '../types/user';
import { getWeeklyActivityData } from '../utils/get-weekly-activity-data';

interface Props {
  users: User[];
}

export const UserCharts = ({ users }: Props) => {
  const planDistribution = getPlanDistribution(users);
  const userGrowthData = getUserGrowthData(users);
  const activityData = getWeeklyActivityData(users);

  return (
    <div className="mb-6 grid gap-4 lg:grid-cols-3">
      <Card className="bg-card border-border lg:col-span-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">User Growth</CardTitle>
          <p className="text-2xl font-semibold text-foreground">2,480</p>
        </CardHeader>
        <CardContent className="pb-4">
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={userGrowthData}>
                <defs>
                  <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#71717a', fontSize: 11 }}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111111',
                    border: '1px solid #27272a',
                    borderRadius: '6px',
                    color: '#fafafa',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="url(#userGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Plan Distribution
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-4">
          <div className="flex items-center justify-between">
            <div className="h-[160px] w-[160px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={planDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {planDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      //   backgroundColor: '#EB5E55',
                      //   backgroundColor: '#111111',
                      backgroundColor: '#E7ECEF',
                      border: '1px solid #27272a',
                      borderRadius: '6px',
                      color: '#fafafa',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {planDistribution.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.fill }} />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                  <span className="ml-auto text-sm font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Weekly Activity
          </CardTitle>
          <p className="text-2xl font-semibold text-foreground">1,768</p>
        </CardHeader>
        <CardContent className="pb-4">
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#71717a', fontSize: 11 }}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111111',
                    border: '1px solid #27272a',
                    borderRadius: '6px',
                    color: '#fafafa',
                  }}
                />
                <Bar dataKey="logins" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
