// src/types/ResponseData.ts
export interface ResponseData<T = any> {
  code: number;
  message: string;
  data: T;
}
