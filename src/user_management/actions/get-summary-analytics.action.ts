import type { ApiErrorResponse } from '@/auth/types/api.error.response';
import axios from 'axios';
import { userApi } from '../api/user.api';
import type { SummaryAnalyticsResponse } from '../types/get-summary-analytics-response';

export const getSummaryAnalyticsAction = async () => {
  try {
    const { data } = await userApi.get<SummaryAnalyticsResponse>('/summary-analytics');

    return data.data;
  } catch (error) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
