import { z } from 'zod';

export const emailSchema = z.string('Invalid email address').min(1, 'Email is required').email();

export const passwordSchema = z
  .string()
  .min(1, 'Password is required')
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character');

export const baseAuthSchema = {
  email: emailSchema,
  password: passwordSchema,
};
