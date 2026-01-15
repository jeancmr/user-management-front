import axios from 'axios';
import { userApi } from '../api/user.api';
import type { UsersReponse } from '../types/get-users.response';
import type { ApiErrorResponse } from '@/auth/types/api.error.response';

export const getUsersByPageAction = async (page: number = 1, limit: number = 6) => {
  try {
    const { data } = await userApi.get<UsersReponse>('/', {
      params: { page, limit },
    });

    const usersWithDatesFormated = data.data.users.map((user) => ({
      ...user,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
      lastLogin: user.lastLogin ? new Date(user.lastLogin) : null,
    }));

    const { totalPages } = data.data.meta;

    return { usersWithDatesFormated, totalPages };
  } catch (error) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
