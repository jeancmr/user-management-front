import axios from 'axios';
import { authApi } from '../api/auth.api';
import type { ApiErrorResponse } from '../types/api.error.response';

export const logoutAction = async () => {
  try {
    const { data } = await authApi.post<string>('/logout');

    return data;
  } catch (error) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
