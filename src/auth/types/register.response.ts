export interface RegisterResponse {
  message: string;
  data: RegisterResponseData;
}

export interface RegisterResponseData {
  id: number;
  name: string;
  email: string;
  company: string;
  role: string;
  status: string;
  plan: string;
  lastLogin: null;
  createdAt: Date;
  updatedAt: Date;
}
