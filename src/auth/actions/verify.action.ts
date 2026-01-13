import axios from 'axios';
import { authApi } from '../api/auth.api';
import type { ApiErrorResponse } from '../types/api.error.response';
import type { LoginResponse } from '../types/login.response';

export const verifyAction = async () => {
  try {
    const { data } = await authApi.get<LoginResponse>('/verify');
    return data;
  } catch (error) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
