import axios from 'axios';
import { userApi } from '../api/user.api';
import type { UsersReponse } from '../types/get-users.response';
import type { ApiErrorResponse } from '@/auth/types/api.error.response';
import { cleanParams } from '../utils/clean-params';

interface Options {
  plan?: string;
  rol?: string;
  search?: string;
  status?: string;
}

export const getUsersByPageAction = async (
  page: number = 1,
  limit: number = 6,
  filters: Options,
) => {
  try {
    const cleanEmptyFilters = cleanParams({ ...filters });

    const { data } = await userApi.get<UsersReponse>('/', {
      params: { page, limit, ...cleanEmptyFilters },
    });

    const usersWithDatesFormated = data.data.users.map((user) => ({
      ...user,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
      lastLogin: user.lastLogin ? new Date(user.lastLogin) : null,
    }));

    const { totalPages, total } = data.data.meta;

    return { usersWithDatesFormated, totalPages, total };
  } catch (error) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
