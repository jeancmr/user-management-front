import type { User } from './user';

export interface UsersReponse {
  ok: boolean;
  method: string;
  data: Data;
}

export interface Data {
  users: User[];
  meta: Meta;
}

export interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
