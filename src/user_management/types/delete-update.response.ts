export interface UpdateDeleteResponse {
  ok: boolean;
  method: string;
  data: Message;
}

export interface Message {
  message: string;
}
