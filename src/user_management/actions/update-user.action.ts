import axios from 'axios';
import { userApi } from '../api/user.api';
import type { UpdateUser } from '@/user_management/types/user';
import type { ApiErrorResponse } from '../../auth/types/api.error.response';
import type { RegisterResponse } from '../../auth/types/register.response';

export const updateUserAction = async (userData: UpdateUser, id: string) => {
  try {
    const { data } = await userApi.patch<RegisterResponse>(`/${id}`, userData);
    return data;
  } catch (error) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
