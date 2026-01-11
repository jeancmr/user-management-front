import { z } from 'zod';
import { baseAuthSchema } from './auth-base.schema';

export const loginSchema = z.object({
  ...baseAuthSchema,
});

export type LoginFormValues = z.infer<typeof loginSchema>;
