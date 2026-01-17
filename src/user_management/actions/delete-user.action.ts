import axios from 'axios';
import { userApi } from '../api/user.api';
import type { ApiErrorResponse } from '../../auth/types/api.error.response';
import type { UpdateDeleteResponse } from '../types/delete-update.response';

export const deleteUserAction = async (id: string) => {
  try {
    const { data } = await userApi.delete<UpdateDeleteResponse>(`/${id}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
