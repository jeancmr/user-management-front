export type UserStatus = 'active' | 'suspended';
export type UserRole = 'admin' | 'user';
export type UserPlan = 'free' | 'pro';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  plan: UserPlan;
  lastLogin: Date;
  createdAt: Date;
  avatar?: string;
}
