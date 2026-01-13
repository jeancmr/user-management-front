export interface LoginResponse {
  message: string;
  data: LoginResponseData;
}

export interface LoginResponseData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  plan: string;
  lastLogin: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
