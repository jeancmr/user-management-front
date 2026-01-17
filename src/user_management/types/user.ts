export const PLANS = ['free', 'pro'] as const;
export const ROLES = ['admin', 'user'] as const;
export const STATUSES = ['admin', 'user'] as const;

export type UserStatus = (typeof STATUSES)[number];
export type UserRole = (typeof ROLES)[number];
export type UserPlan = (typeof PLANS)[number];

export interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  role: UserRole;
  status: UserStatus;
  plan: UserPlan;
  lastLogin: Date | null;
  createdAt: Date;
  updatedAt: Date;
  avatar?: string;
}

export type UpdateUser = Partial<User>;
