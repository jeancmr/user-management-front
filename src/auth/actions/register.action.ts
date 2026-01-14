import axios from 'axios';
import { authApi } from '../api/auth.api';
import type { RegisterFormValues } from '../schemas/register.schema';
import type { ApiErrorResponse } from '../types/api.error.response';
import type { RegisterResponse } from '../types/register.response';
import { getFilteredRegisterUser } from '../utils/get-register-filtered-user';

export const registerAction = async (userData: RegisterFormValues) => {
  try {
    const filteredUser = getFilteredRegisterUser(userData);

    const { data } = await authApi.post<RegisterResponse>('/register', filteredUser);
    return data;
  } catch (error) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
