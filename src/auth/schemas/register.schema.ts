import { z } from 'zod';
import { baseAuthSchema } from './auth-base.schema';

export const registerSchema = z
  .object({
    ...baseAuthSchema,
    confirmPassword: z.string(),
    firstName: z.string().min(1, 'Name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    company: z.string().min(1, 'Company is required').min(3, 'Company not valid'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
