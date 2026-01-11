import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { User } from '../types/user';
import { getPlanDistribution, getUserGrowthData, getWeeklyActivityData } from '../utils';
import { CardChartWrapper } from './CardChartWrapper';

interface Props {
  users: User[];
}

export const UserCharts = ({ users }: Props) => {
  const planDistribution = getPlanDistribution(users);
  const userGrowthData = getUserGrowthData(users);
  const activityData = getWeeklyActivityData(users);

  return (
    <div className="mb-6 grid gap-4 lg:grid-cols-3">
      <CardChartWrapper title="User Growth" quantity="2480">
        <div className="h-35">
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
      </CardChartWrapper>

      <CardChartWrapper title="Plan Distribution">
        <div className="flex items-center justify-between">
          <div className="h-40 w-40">
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
      </CardChartWrapper>

      <CardChartWrapper title="Weekly Activity" quantity="1,768">
        <div className="h-35">
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
      </CardChartWrapper>
    </div>
  );
};
