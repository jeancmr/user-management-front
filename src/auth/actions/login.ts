import axios from 'axios';
import { authApi } from '../api/auth.api';
import type { LoginFormValues } from '../schemas/login.schema';
import type { LoginResponse } from '../types/login.response';
import type { ApiErrorResponse } from '../types/api.error.response';

export const loginAction = async ({ email, password }: LoginFormValues) => {
  try {
    const { data } = await authApi.post<LoginResponse>('/login', {
      email,
      password,
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
