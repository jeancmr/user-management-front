export type UserStatus = 'active' | 'suspended';
export type UserRole = 'admin' | 'user';
export type UserPlan = 'free' | 'pro';

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
