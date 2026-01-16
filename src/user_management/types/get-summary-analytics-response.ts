export interface SummaryAnalyticsResponse {
  ok: boolean;
  method: string;
  data: Data;
}

export interface Data {
  summary: Summary;
  analytics: Analytics;
}

export interface Analytics {
  userGrowth: UserGrowth[];
  planDistribution: PlanDistribution[];
  weeklyActivity: WeeklyActivity[];
}

export interface PlanDistribution {
  name: string;
  value: number;
  fill: string;
}

export interface UserGrowth {
  month: string;
  users: number;
  proUsers: number;
}

export interface WeeklyActivity {
  day: string;
  logins: number;
}

export interface Summary {
  totalUsers: number;
  active: number;
  suspended: number;
  pro: number;
}
